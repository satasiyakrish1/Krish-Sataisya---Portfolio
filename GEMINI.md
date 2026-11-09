# GEMINI.md - Efficient AI Development Rules

## 1. TOKEN EFFICIENCY
- Keep responses concise and technical.
- Avoid repeating the user's request.
- Do not explain obvious code.
- Use short plans for simple tasks.
- Avoid unnecessary conversation and summaries.
- Do not repeatedly restate project context.
- Load only information relevant to the current task.

## 2. CODEBASE INSPECTION
- Inspect project structure before making changes.
- Read only relevant files.
- Do not scan node_modules, dist, build, .git or generated files.
- Avoid reading entire files when a relevant section is sufficient.
- Reuse information already obtained in the current task.
- Check package.json before suggesting dependencies.

## 3. IMPLEMENTATION
- Make minimal, targeted changes.
- Follow existing architecture and coding conventions.
- Reuse existing components, utilities and functions.
- Do not rewrite working code without a reason.
- Avoid unnecessary dependencies and abstractions.
- Preserve existing functionality.
- Never modify unrelated files.

## 4. PLANNING AND REASONING
- Simple tasks: execute directly without a lengthy plan.
- Complex tasks: create a short implementation plan.
- Do not repeatedly reconsider settled decisions.
- Ask questions only when essential information is missing.
- Avoid unnecessary agent delegation and parallel tasks.
- Do not perform repeated searches for information already found.

## 5. TERMINAL AND TOOLS
- Use the minimum necessary terminal commands.
- Combine safe related read-only commands where practical.
- Avoid repeating commands that already succeeded.
- Do not run expensive builds or full test suites unnecessarily.
- Never run destructive commands without permission.
- Do not install packages unless genuinely required.

## 6. MODEL AND QUOTA
- Prefer an efficient Flash model for routine coding tasks when available.
- Reserve Pro or higher-reasoning models for genuinely complex problems.
- Do not assume this file can override model selection or account quotas.
- Avoid unnecessary multi-step agent loops.
- Stop once the requested task is verified.

## 7. TESTING
- Run only relevant tests first.
- Use targeted linting and type checks.
- Run full builds when the change warrants them.
- Never claim unverified results.
- Report errors briefly and accurately.

## 8. FINAL RESPONSE
Use this concise format:

1. What changed.
2. Files modified.
3. Verification performed.
4. Remaining issues, if any.

Do not provide lengthy explanations unless requested.

## 9. SECURITY
- Never expose secrets, API keys or environment variables.
- Never overwrite user data without permission.
- Do not disable security checks to make tests pass.
- Review destructive operations before execution.

## 10. MAIN PRINCIPLE
Use the smallest amount of context, reasoning, tool calls and code changes
needed to complete the task correctly.
Quality and correctness must never be sacrificed for token savings.