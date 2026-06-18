<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project coordination (check-then-register)

We run many projects across separate Claude Code sessions. To avoid duplicating
or dropping work, every session uses the central registry. See
[`docs/PROJECT_REGISTRY.md`](docs/PROJECT_REGISTRY.md).

- **Before starting:** search open issues labeled `registry` for the same goal.
  If one exists, continue it — do not open a duplicate.
- **If none exists:** register the project using the
  `project-registration` issue template.
- **While working:** keep the issue's status label and working branch current.
- **Before ending:** set status to `done`, or `blocked` with a note on what's
  needed to resume. Never end a session with work in an undocumented state.
