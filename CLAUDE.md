# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LucaPath (路卡命运罗盘) / 三才 is a Chinese-language family destiny analysis web app that integrates BaZi (八字/Four Pillars), Five Elements (五行), MBTI, and Western psychology to help Chinese families understand their children's strengths and educational path. The target audience is affluent Chinese families (especially in the US/Canada) seeking holistic child development guidance.

## Running the App

There is no build system. Open `lucapath_app.html` directly in a browser. No server required — it is a fully self-contained single-file app.

```
open lucapath_app.html
```

The API calls to Claude require a valid Anthropic API key to be injected into the fetch headers (currently hardcoded in the HTML — see the `analyzeWithClaude` and `analyzeFamilyDynamics` functions).

## Architecture

**Everything lives in `lucapath_app.html`** — one file containing all CSS, HTML markup, and JavaScript. No external JS files, no bundler, no framework.

### Screen Flow

The app is a CSS-based SPA with four screens toggled via `showScreen(id)`:
- **Home** (`#home`) — splash/landing
- **Setup** (`#setup`) — family member input form, rendered dynamically by `renderSetup()`
- **Loading** (`#loading`) — shown briefly during analysis
- **Results** (`#results`) — rendered in two phases (see below)

### State

Global state is minimal: `let family = []` (array of member objects with name, role, mbti, year, month, day, hour).

### BaZi Calculation Engine

Pure JS, no library. Key functions:
- `calcBazi(year, month, day, hour)` — returns the four pillars (year/month/day/hour), each with stem (`si`) and branch (`bi`) indices
- `yearPillar`, `monthPillar`, `dayPillar`, `hourPillar` — individual pillar calculations
- `calcWuxing(bazi)` — counts Five Elements across all 8 characters of the chart
- `getDaymaster(bazi)` — returns the Day Master (日主), the core identity element

Lookup tables at the top of the script (`TG`, `DZ`, `WX_TG`, `WX_DZ`, `WX_COLOR`, `WX_F`) map indices to Chinese characters and element colors.

### Analysis Flow (Two-Phase Rendering)

`startAnalysis()` does:
1. Immediately renders result cards with local BaZi data (pillars, Five Elements bars) — no waiting
2. Sequentially calls `analyzeWithClaude()` per member, updating each card's nickname and trait text as responses arrive
3. If ≥2 members, calls `analyzeFamilyDynamics()` for the family system section

Claude API calls go directly from the browser to `https://api.anthropic.com/v1/messages` using `claude-sonnet-4-20250514`. Responses are expected as raw JSON (the prompts explicitly instruct Claude not to wrap in markdown code blocks).

### UI Design System

CSS variables are defined on `:root` — dark navy/gold theme in the app. Key color roles:
- `--gold` / `--gold-l` — primary accent
- Five element colors: `--wood` (green), `--fire` (red), `--earth` (amber), `--metal` (blue-grey), `--water` (navy)
- `WX_F` object maps elements to translucent background fills used on cards

Typography stack: Noto Serif SC (headings), Noto Sans SC (body), Cormorant Garamond (decorative serif), DM Mono (labels/metadata).

## Reference Files

- `PRD/LucaPath_product_design.html` — full product design document with personas, feature architecture, pricing, and roadmap. Read this for product context before making UX decisions.
- `PRD/sancai_product_design.html` — earlier design doc for the 三才 branding iteration.
- `Template/Personal/` — sample individual destiny reports showing the richer "full report" UI (four-system analysis: BaZi + MBTI + Western astrology + Zi Wei Dou Shu). These represent the aspirational output design.
- `Template/Family/` — sample family reports showing family system analysis UI.
- `Template/Children/` — sample reports for children focused on the AI era positioning.

The templates use a darker, more elaborate CSS design system (`--bg`, `--surf`, `--card` variables) and serve as the visual reference for the full product that `lucapath_app.html` is the MVP of.

## Report-Generation Skills

Project-local Claude Code skills live in `.claude/skills/`. They generate the polished, self-contained HTML reports modeled on the `Template/` examples. Each report skill bundles its own CSS, HTML section skeletons, and (where needed) the shared BaZi/astrology calculation reference.

- **`lucapath`** — meta-skill / front-door advisor. Understands what kind of report the user needs and routes to one of the four report skills below. Handles three scenarios: single report (direct route), multi-report chaining (sequential generation with data reuse), and ambiguous requests (3-option menu + one clarifying question). This is the preferred entry point. See `lucapath_skill_architecture.html` for the routing diagram.
- **`personal-destiny-report`** — individual 四系统命理报告 (BaZi + MBTI + Western astrology + Zi Wei Dou Shu). Dark navy/gold aesthetic, mirrors `Template/Personal/`. 6-step interactive intake. Its `references/astro-calculations.md` holds the shared BaZi algorithm + ZiWei tables + Western astrology guide reused by the other two skills.
- **`family-report`** — 家族命理分析报告 for 2–6 members (BaZi + MBTI + Five Elements interaction, pairwise 合盘 scoring, parenting analysis). Light paper aesthetic, mirrors `Template/Family/`. 5-step interactive intake.
- **`children-ai-report`** — AI时代孩子综合发展规划报告 (BaZi + MBTI + Western astrology + hobbies → AI-complementarity matrix). Dark circuit aesthetic, mirrors `Template/Children/` and follows the framework in `Template/Children/AI_Era_Talent_and_Lucca_Analysis_Report.md`. 5-step interactive intake.
- **`business-partner-report`** — 事业合伙人深度相性报告 (BaZi + MBTI + Five Elements → partnership chemistry, complementarity matrix, fortune timing windows, role division). Slate/professional aesthetic on cream paper. 6-step interactive intake. Distinct from `family-report` — focused on commercial context: business domains, wealth dynamics, 大运 timing, and optimal co-founder splits.

When asked to produce any destiny/family/child report, prefer invoking `lucapath` (it routes) or the specific skill directly if the type is already clear.

## Packaging Skills for Distribution

`scripts/pack.py` converts `.claude/skills/` into distributable artifacts. No external dependencies.

```bash
python3 scripts/pack.py            # .skill archives + lucapath-plugin/ directory
python3 scripts/pack.py --no-plugin  # only .skill archives
python3 scripts/pack.py --no-zips    # only the plugin directory
```

Output goes to `dist/`:
- `<name>.skill` — ZIP archive of each individual skill, for sharing or single-skill import
- `lucapath-plugin/` — plugin directory (`.claude-plugin/plugin.json` + all skills) for Cowork import

Always edit source files under `.claude/skills/`, then re-run `pack.py` to refresh `dist/`.
