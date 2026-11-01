<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:codex-project-workflow -->

## Project workflow

- Use pnpm; package.json pins the package manager. Use `pnpm exec` for local
  tools and `pnpm dlx` when a one-off package runner is needed.
- Do not read or edit `.env` and `.env.*` files unless the user explicitly asks.
  `.env.example` is a template and is exempt. Never expose secret values.
- Update pnpm-lock.yaml through pnpm dependency commands rather than hand edits.
- Run ESLint and Prettier on files changed by the task, using the project's
  configuration. Avoid repository-wide formatting for a scoped change.
- After TypeScript changes, run `pnpm typecheck` before finishing. Report any
  unresolved failures accurately, including pre-existing errors outside scope.
- Preserve Husky pre-commit checks (`pnpm typecheck` and lint-staged). Do not
  bypass them with `--no-verify`, `-n`, or `HUSKY=0` unless explicitly requested.
- Do not force-push, discard user changes, or rewrite Git history without an
  explicit request. Creating a PR does not authorize merging it.

These are agent workflow instructions, not executable or security-enforcing hooks.

<!-- END:codex-project-workflow -->
