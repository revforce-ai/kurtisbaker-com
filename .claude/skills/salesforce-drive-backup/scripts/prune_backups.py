#!/usr/bin/env python3
"""Decide which Salesforce backups to keep vs. delete.

Retention policy:
  - <= 30 days old        -> keep every (weekly) backup
  - 31 days .. 12 months  -> keep only the newest backup per calendar month
  - > 12 months old       -> delete

The newest backup overall is always kept. No external dependencies and no
Google Drive calls -- this only computes the keep/delete plan from a JSON
listing so it can be reviewed before anything is deleted.

Input JSON: a list of objects with at least "date" (YYYY-MM-DD). "name" and
"id" are passed through untouched for convenience.

  python3 prune_backups.py backups.json              # human-readable plan
  python3 prune_backups.py backups.json --delete     # newline-separated ids to delete
  python3 prune_backups.py backups.json --today 2026-06-17
  cat backups.json | python3 prune_backups.py -      # read from stdin
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import sys


def parse_date(value: str) -> dt.date:
    return dt.datetime.strptime(value[:10], "%Y-%m-%d").date()


def months_between(today: dt.date, then: dt.date) -> int:
    """Whole calendar months from `then` to `today` (>= 0 for past dates)."""
    return (today.year - then.year) * 12 + (today.month - then.month) - (
        1 if today.day < then.day else 0
    )


def plan(backups: list[dict], today: dt.date) -> list[dict]:
    """Annotate each backup with keep=bool and a human reason. Input order is
    irrelevant; output is sorted newest-first."""
    items = sorted(backups, key=lambda b: parse_date(b["date"]), reverse=True)

    monthly_seen: set[tuple[int, int]] = set()
    result = []
    for i, b in enumerate(items):
        d = parse_date(b["date"])
        age_days = (today - d).days

        if i == 0:
            keep, reason = True, "most recent backup"
        elif age_days <= 30:
            keep, reason = True, f"weekly tier ({age_days}d old)"
        elif months_between(today, d) < 12:
            key = (d.year, d.month)
            if key in monthly_seen:
                keep, reason = False, f"superseded monthly ({d:%Y-%m})"
            else:
                monthly_seen.add(key)
                keep, reason = True, f"monthly tier ({d:%Y-%m})"
        else:
            keep, reason = False, f"older than 12 months ({age_days}d old)"

        result.append({**b, "keep": keep, "reason": reason})
    return result


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("input", help="JSON file with the backup listing, or - for stdin")
    ap.add_argument("--today", help="Override today's date (YYYY-MM-DD)")
    ap.add_argument(
        "--delete",
        action="store_true",
        help="Print only the ids (or names) to delete, one per line",
    )
    args = ap.parse_args()

    raw = sys.stdin.read() if args.input == "-" else open(args.input).read()
    backups = json.loads(raw)
    today = parse_date(args.today) if args.today else dt.date.today()

    decided = plan(backups, today)

    if args.delete:
        for b in decided:
            if not b["keep"]:
                print(b.get("id") or b.get("name", ""))
        return 0

    kept = sum(1 for b in decided if b["keep"])
    for b in decided:
        mark = "KEEP  " if b["keep"] else "DELETE"
        label = b.get("name") or b.get("id") or b["date"]
        print(f"{mark}  {b['date']}  {label}  ({b['reason']})")
    print(f"\n{kept} kept, {len(decided) - kept} to delete (as of {today}).",
          file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
