---
name: port-omc-skill
description: Create an OMX project skill by adapting an implemented OMC skill from /home/devswha/workspace/oh-my-claudecode-docs. Preserves the original workflow contract, rewrites Claude/OMC terminology into Codex/OMX terms, and adds verification so the new skill is ready to use in this repo.
triggers:
  - "make omx skill"
  - "create omx skill"
  - "port omc skill"
  - "adapt skill from omc"
  - "/port-omc-skill"
type: workflow
scope: project
---

# port-omc-skill

Operational skill for creating a new **project-local OMX skill** by using an
implemented OMC skill as the reference.

Use this when a workflow already exists in
`/home/devswha/workspace/oh-my-claudecode-docs` and you want the same idea to
exist in this repo with **OMX-specific terminology, paths, and runtime
assumptions**.

## When to use

- The user says to create an OMX skill based on an existing OMC skill
- A project-local workflow should be reused from OMC with minimal reinvention
- You need a repeatable way to port Claude/OMC-oriented wording into
  Codex/OMX wording
- You want the resulting skill to live under `.omc/skills/<name>/SKILL.md`

## Constants

| Key | Value |
|---|---|
| `OMC_REPO` | `/home/devswha/workspace/oh-my-claudecode-docs` |
| `OMC_PROJECT_SKILLS` | `/home/devswha/workspace/oh-my-claudecode-docs/.omc/skills` |
| `OMC_UPSTREAM_SKILLS` | `/home/devswha/workspace/oh-my-claudecode-docs/.omc/upstream/oh-my-claudecode/skills` |
| `OMX_PROJECT_SKILLS` | `.omc/skills` |
| `TARGET_SKILL_FILE` | `.omc/skills/<target-skill-name>/SKILL.md` |
| `OMX_DOCS_SITE` | `https://omx.vibetip.help` |
| `OMC_DOCS_SITE` | `https://omc.vibetip.help` |

## Porting policy

### 1. Preserve the workflow contract

Keep the useful parts of the source skill intact:

- frontmatter shape
- command structure
- ordered workflow steps
- constants table
- verification section
- explicit stop / escalate rules

Do **not** rewrite a working skill from scratch unless the source is clearly
Claude-specific and cannot be mapped safely.

### 2. Apply the canonical terminology map

When porting from OMC to OMX, rewrite terms consistently:

| OMC / Claude term | OMX / Codex term |
|---|---|
| `oh-my-claudecode` | `oh-my-codex` |
| `OMC` | `OMX` |
| `omc.vibetip.help` | `omx.vibetip.help` |
| `Claude Code` | `OpenAI Codex CLI` or `Codex CLI` |
| `claude.com/code` docs references | Codex CLI / OpenAI docs references |
| `Anthropic`-specific runtime wording | Codex / OpenAI wording when conceptually equivalent |
| `.omc/upstream/oh-my-claudecode` | `.omc/upstream/oh-my-codex` |

### 3. Keep evidence over assumption

If the source skill references:

- a repo path
- a version file
- a generated docs count
- a command name
- a build invariant
- a skill / agent count

verify the OMX equivalent in this repo before copying it into the new skill.

Never blindly preserve OMC-specific numbers, paths, or file names.

## Workflow

### Step 1 — Identify the source skill

Find the reference skill in one of these locations:

```bash
find /home/devswha/workspace/oh-my-claudecode-docs/.omc/skills -maxdepth 2 -name SKILL.md
find /home/devswha/workspace/oh-my-claudecode-docs/.omc/upstream/oh-my-claudecode/skills -maxdepth 2 -name SKILL.md
```

Choose the best source by priority:

1. project-local OMC skill under `.omc/skills/`
2. upstream OMC skill under `.omc/upstream/oh-my-claudecode/skills/`

If both exist, prefer the **project-local** version because it is usually more
operational and tailored to docs-repo maintenance.

### Step 2 — Determine the target skill shape

Decide:

- **target skill name**
- whether the name stays the same or should be OMX-specific
- whether the skill belongs in a `workflow` style or `utility` style lane
- whether the skill is **project-local only** or should later be documented in
  `content/docs/skills/`

Default rule:

- keep the original structure
- rename only the brand-specific part

Examples:

- `sync-omc-docs` → `sync-omx-docs`
- `omc-reference` → `omx-reference`
- `omc-setup` → `omx-setup`

### Step 3 — Extract the source contract

Read the source `SKILL.md` and capture:

- frontmatter fields
- purpose / when-to-use
- constants table
- workflow steps
- verification steps
- commit / reporting expectations

Port the shape first, then adapt the details.

### Step 4 — Rewrite OMC specifics into OMX specifics

Systematically replace OMC-specific assumptions:

1. **Repo and path references**
   - switch source paths to current repo paths
   - confirm files actually exist before mentioning them

2. **Product and runtime terminology**
   - change Claude/OMC language to Codex/OMX language
   - preserve proper nouns that are still valid in OMX

3. **Docs, counts, and versions**
   - re-count current docs pages if the skill mentions totals
   - re-check version injection flow
   - verify agent / skill counts if mentioned

4. **External doc references**
   - Claude docs links become OpenAI / Codex docs references
   - if no equivalent exists, rewrite the instruction generically instead of
     keeping a wrong vendor link

### Step 5 — Write the new skill

Create the new file:

```bash
mkdir -p .omc/skills/<target-skill-name>
```

Then write:

```bash
.omc/skills/<target-skill-name>/SKILL.md
```

Requirements:

- valid frontmatter
- clear description
- explicit triggers
- stable workflow order
- current-repo paths only
- no stale `OMC`, `oh-my-claudecode`, or `Claude Code` references unless the
  new skill is intentionally cross-repo

### Step 6 — Sanity-check the new skill text

Run targeted checks:

```bash
rg -n "OMC|oh-my-claudecode|Claude Code|omc.vibetip.help" .omc/skills/<target-skill-name>/SKILL.md
```

Expected result:

- zero matches, unless the new skill explicitly compares OMX against OMC

Also verify the referenced files actually exist:

```bash
rg -n "src/|content/docs|\\.omc/" .omc/skills/<target-skill-name>/SKILL.md
```

Spot-check any path that looks suspicious with `ls` / `find`.

### Step 7 — Optional docs follow-up

If the user wants the new skill surfaced on the public docs site, follow up by:

- adding MDX pages under `content/docs/skills/`
- updating the relevant `meta.json` / localized `meta.*.json`
- adding translations for supported locales

Do **not** assume public docs are required unless the user asks for that scope.

### Step 8 — Verify

Minimum verification for a project-local skill addition:

1. `git diff -- .omc/skills/<target-skill-name>/SKILL.md`
2. `npm run lint`
3. `npm run build`

If public docs were also changed, verify those rendered pages too.

## Output contract

When done, report:

- source skill used
- new target skill path
- major terminology adaptations applied
- verification results
- whether docs-site pages were intentionally skipped or included

## Example outcome

Source:

- `/home/devswha/workspace/oh-my-claudecode-docs/.omc/skills/sync-omc-docs/SKILL.md`

Target:

- `.omc/skills/sync-omx-docs/SKILL.md`

Core adaptations:

- repo path switched to `oh-my-codex`
- OMC → OMX naming rewritten
- Claude Code references replaced with Codex CLI wording
- current docs counts / file paths revalidated before copying
