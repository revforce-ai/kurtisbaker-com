# Central project registry

We run many projects separately in Claude Code. Each session is **isolated and
ephemeral** — the container is cloned fresh and reclaimed afterward, so nothing
carries over between sessions unless it lives in GitHub. This registry is the
**single source of truth** that prevents two problems:

- **Duplication** — two sessions starting the same work.
- **Dropping** — work that quietly dies when a session ends and is never resumed.

## How it works

1. **GitHub Issues** are the registry. **One issue = one project** (a unit of
   work), labeled `registry`. Open the
   [project-registration template](../.github/ISSUE_TEMPLATE/project-registration.yml)
   to create one.
2. **A Project board** (org-level) gives the cross-repo, at-a-glance view:
   Todo → In&nbsp;Progress → Blocked → In&nbsp;Review → Done. Because GitHub
   Projects are org-scoped, the board spans *every* repo, not just this one.
3. **Status labels** mirror the board columns: `status:todo`,
   `status:in-progress`, `status:blocked`, `status:in-review`, `status:done`.

## The rule every session follows

Before starting work:

1. **Search** open `registry` issues for the same goal. If one exists, comment
   and continue it — do **not** open a duplicate.
2. If none exists, **register** the project (open a registration issue).

While working: keep the issue's **status** current (label + board column) and
record the **working branch**.

When finishing: set status to `done` (or `blocked` with a note on what's needed
to resume). Never let a session end with work in an undocumented state.

## Board setup (one-time, GitHub UI)

The GitHub MCP tools available to Claude Code can manage issues and labels but
not create Project boards, so create the board once by hand:

1. Org → **Projects** → **New project** → Board layout → name it
   `Claude Code Projects`.
2. Add a **Status** single-select field with options: Todo, In Progress,
   Blocked, In Review, Done.
3. Add a workflow: **auto-add** items with the `registry` label from each repo
   you want tracked.

## Migrating to a dedicated hub repo (optional, recommended later)

Best practice is to host this in a dedicated `ops`/`projects` repo so it isn't
coupled to any one product. That requires repo-create permission this Claude
Code session doesn't have. To migrate later: create the repo, move/transfer the
`registry` issues into it, and re-point the board's auto-add workflow. This doc
and the template move with it unchanged.
