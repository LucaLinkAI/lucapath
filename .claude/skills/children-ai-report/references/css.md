# CSS Design System — Children AI Report

Dark tech aesthetic with circuit grid background. Per-child color themes.

---

## Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&family=Noto+Serif+SC:wght@400;500;700&family=Rajdhani:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Color Themes — Pick One Per Child

### Theme A: Green Circuit (default — ESTP/Wood/action types)
```css
:root {
  --bg: #0a1f0f; --bg2: #0f2a14; --bg3: #122e17;
  --c-dark: #1a4020; --c-mid: #2a6030; --c-light: #3a8040;
  --c-accent: #d4a520; --c-accent-light: #e8c040;
  --c-accent-faint: rgba(212,165,32,0.15); --c-accent-border: rgba(212,165,32,0.35);
  --c-warn: #e07820;
  --c-child: #80d890; --c-combo: var(--c-accent-light);
  --circuit: rgba(100,200,100,0.06);
  --th-child-bg: rgba(40,120,50,0.3); --th-child-border: rgba(60,180,70,0.3); --th-child-color: #80d890;
  --cell-child-bg1: rgba(10,35,15,0.95); --cell-child-bg2: rgba(8,28,12,0.98); --cell-child-border: rgba(60,160,70,0.35);
  --strat-bg1: #0f2a15; --strat-bg2: #0a1f0f; --strat-border: rgba(60,160,70,0.25);
  --strat-top: linear-gradient(90deg, #2a6030, #d4a520);
  --goal-bg1: #1a3a20; --goal-bg2: #0f2410; --goal-border: var(--c-accent); --goal-glow: rgba(212,165,32,0.15);
}
```

### Theme B: Indigo Ink (INFP/INFJ/Water/literary types)
```css
:root {
  --bg: #080d1a; --bg2: #0d1428; --bg3: #0f1a30;
  --c-dark: #0f1a30; --c-mid: #1a2a4a; --c-light: #3050a0;
  --c-accent: #c8a040; --c-accent-light: #e0c060;
  --c-accent-faint: rgba(200,160,64,0.15); --c-accent-border: rgba(200,160,64,0.3);
  --c-warn: #c06830;
  --c-child: #8090c8; --c-combo: var(--c-accent-light);
  --circuit: rgba(50,70,160,0.04);
  --th-child-bg: rgba(80,100,200,0.15); --th-child-border: rgba(80,120,200,0.25); --th-child-color: #8090c8;
  --cell-child-bg1: rgba(10,15,40,0.95); --cell-child-bg2: rgba(8,12,32,0.98); --cell-child-border: rgba(80,120,200,0.3);
  --strat-bg1: #0d1428; --strat-bg2: #080f20; --strat-border: rgba(80,100,200,0.2);
  --strat-top: linear-gradient(90deg, #3050a0, #c8a040);
  --goal-bg1: #101830; --goal-bg2: #0c1225; --goal-border: var(--c-accent); --goal-glow: rgba(200,160,64,0.1);
}
```

### Theme C: Teal Steel (ISTJ/ESTJ/Metal/sport-precision types)
```css
:root {
  --bg: #080f14; --bg2: #0a1820; --bg3: #0f2030;
  --c-dark: #0f2030; --c-mid: #1a3545; --c-light: #205870;
  --c-accent: #d09820; --c-accent-light: #e8b840;
  --c-accent-faint: rgba(208,152,32,0.15); --c-accent-border: rgba(208,152,32,0.3);
  --c-warn: #c07020;
  --c-child: #60b8d0; --c-combo: var(--c-accent-light);
  --circuit: rgba(30,80,100,0.04);
  --th-child-bg: rgba(32,88,112,0.25); --th-child-border: rgba(40,120,150,0.3); --th-child-color: #60b8d0;
  --cell-child-bg1: rgba(8,18,28,0.95); --cell-child-bg2: rgba(6,14,22,0.98); --cell-child-border: rgba(32,88,112,0.35);
  --strat-bg1: #0a1820; --strat-bg2: #070e18; --strat-border: rgba(32,88,112,0.25);
  --strat-top: linear-gradient(90deg, #205870, #d09820);
  --goal-bg1: #101a20; --goal-bg2: #0c1418; --goal-border: var(--c-accent); --goal-glow: rgba(208,152,32,0.1);
}
```

### Theme D: Coral Fire (ENFJ/ESFP/Fire/performer types)
```css
:root {
  --bg: #0f0c0a; --bg2: #1a110d; --bg3: #201510;
  --c-dark: #201510; --c-mid: #3a2010; --c-light: #c05030;
  --c-accent: #e8b040; --c-accent-light: #f0c860;
  --c-accent-faint: rgba(232,176,64,0.15); --c-accent-border: rgba(232,176,64,0.3);
  --c-warn: #c07030;
  --c-child: #e08070; --c-combo: var(--c-accent-light);
  --circuit: rgba(180,60,30,0.04);
  --th-child-bg: rgba(200,80,50,0.2); --th-child-border: rgba(220,100,60,0.3); --th-child-color: #e08070;
  --cell-child-bg1: rgba(30,12,8,0.95); --cell-child-bg2: rgba(22,9,6,0.98); --cell-child-border: rgba(200,80,50,0.35);
  --strat-bg1: #1a100a; --strat-bg2: #110c07; --strat-border: rgba(180,60,30,0.25);
  --strat-top: linear-gradient(90deg, #c05030, #e8b040);
  --goal-bg1: #1a1008; --goal-bg2: #130c06; --goal-border: var(--c-accent); --goal-glow: rgba(232,176,64,0.12);
}
```

### Theme E: Amber Stone (INTJ/ENTJ/Earth/builder types)
```css
:root {
  --bg: #100f08; --bg2: #181507; --bg3: #1c1a09;
  --c-dark: #1c1a09; --c-mid: #302c10; --c-light: #8a7020;
  --c-accent: #d4a020; --c-accent-light: #e8c040;
  --c-accent-faint: rgba(212,160,32,0.15); --c-accent-border: rgba(212,160,32,0.3);
  --c-warn: #b06020;
  --c-child: #c8a850; --c-combo: var(--c-accent-light);
  --circuit: rgba(140,110,20,0.05);
  --th-child-bg: rgba(140,110,20,0.2); --th-child-border: rgba(180,140,30,0.3); --th-child-color: #c8a850;
  --cell-child-bg1: rgba(20,18,5,0.95); --cell-child-bg2: rgba(15,14,4,0.98); --cell-child-border: rgba(140,110,20,0.35);
  --strat-bg1: #181407; --strat-bg2: #100f05; --strat-border: rgba(140,110,20,0.25);
  --strat-top: linear-gradient(90deg, #8a7020, #d4a020);
  --goal-bg1: #1c1808; --goal-bg2: #141206; --goal-border: var(--c-accent); --goal-glow: rgba(212,160,32,0.12);
}
```

---

## Full CSS (paste after the chosen :root block)

```css
* { margin:0; padding:0; box-sizing:border-box; }

:root {
  --white: #f0f5f0;
  --white-soft: rgba(240,245,240,0.85);
  --white-muted: rgba(240,245,240,0.55);
  --red-soft: rgba(200,60,40,0.18);
  --red-border: rgba(200,80,40,0.4);
}

body {
  background: var(--bg);
  color: var(--white);
  font-family: 'Noto Sans SC', sans-serif;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  overflow-x: hidden;
}

/* ── CIRCUIT BACKGROUND ── */
.page {
  width: 100%; max-width: 1000px;
  background: var(--bg);
  position: relative; overflow: hidden;
  padding: 0 0 48px; margin: 0 auto;
}
.page::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--circuit) 1px, transparent 1px),
    linear-gradient(90deg, var(--circuit) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* ── PARENT HEADER (multi-child only) ── */
.parent-header {
  background: linear-gradient(135deg, #0d0d20, #181828, #0d0d20);
  padding: 28px 48px;
  border-bottom: 1px solid rgba(200,200,255,0.15);
  display: flex; align-items: center; gap: 24px;
}
.parent-label { font-size: 11px; letter-spacing: 0.2em; color: rgba(180,180,255,0.6); margin-bottom: 6px; font-weight: 500; }
.parent-title { font-family: 'Noto Serif SC', serif; font-size: 22px; font-weight: 700; color: var(--white); }
.parent-chips { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
.pchip { font-size: 11px; padding: 3px 12px; border-radius: 20px; font-weight: 500; border: 1px solid; }
.parent-quote {
  flex: 1; padding: 14px 20px;
  background: rgba(255,255,255,0.04); border-left: 2px solid rgba(200,200,255,0.3);
  border-radius: 0 8px 8px 0; font-size: 13px; color: var(--white-soft); line-height: 1.7;
}
.parent-quote strong { color: var(--white); }

/* ── CHILD BLOCK WRAPPER ── */
.block { position: relative; overflow: hidden; padding: 0 0 40px; }
.block::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    radial-gradient(ellipse at 80% 10%, rgba(var(--circuit-color,100,200,100), 0.08) 0%, transparent 60%),
    linear-gradient(var(--circuit) 1px, transparent 1px),
    linear-gradient(90deg, var(--circuit) 1px, transparent 1px);
  background-size: 100% 100%, 50px 50px, 50px 50px;
  pointer-events: none;
}

/* ── HEADER (single child) ── */
.header {
  background: linear-gradient(135deg, var(--bg2) 0%, var(--bg3) 50%, var(--bg2) 100%);
  padding: 36px 48px 32px; position: relative;
  border-bottom: 2px solid var(--c-accent);
}
.header::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, transparent, var(--c-accent-light), var(--c-accent), var(--c-accent-light), transparent);
}
.header-top { display: flex; align-items: flex-start; gap: 20px; margin-bottom: 12px; }
.ai-badge {
  background: linear-gradient(135deg, var(--c-dark), var(--c-mid));
  border: 1.5px solid var(--c-accent); border-radius: 10px; padding: 10px 16px;
  font-family: 'Rajdhani', sans-serif; font-size: 22px; font-weight: 700;
  color: var(--c-accent-light); letter-spacing: 0.05em; flex-shrink: 0;
  text-shadow: 0 0 20px rgba(212,165,32,0.5); box-shadow: 0 0 20px rgba(212,165,32,0.2);
}
.header-titles { flex: 1; }
.title-main { font-family: 'Noto Sans SC', sans-serif; font-size: 32px; font-weight: 900; line-height: 1.2; color: var(--white); letter-spacing: 0.02em; }
.title-main .highlight { color: var(--c-accent-light); text-shadow: 0 0 30px rgba(212,165,32,0.6); }
.title-sub { font-size: 20px; font-weight: 700; color: var(--c-accent); margin-top: 4px; letter-spacing: 0.02em; }
.header-chips { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.chip { font-size: 12.5px; font-weight: 500; padding: 4px 14px; border-radius: 20px; border: 1px solid; letter-spacing: 0.04em; }
.chip-mbti { background: rgba(var(--c-light-rgb, 58,128,64), 0.2); border-color: var(--c-light); color: var(--c-child); }
.chip-bazi { background: var(--c-accent-faint); border-color: var(--c-accent); color: var(--c-accent-light); }
.chip-astro { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); color: var(--white-soft); }
.header-quote {
  background: rgba(0,0,0,0.3); border-left: 3px solid var(--c-accent);
  padding: 10px 18px; border-radius: 0 8px 8px 0;
  font-size: 13.5px; color: var(--white-soft); line-height: 1.6; margin-top: 16px;
}
.header-quote strong { color: var(--c-accent-light); }

/* ── BLOCK HEADER (multi-child) ── */
.block-header { padding: 32px 48px 24px; position: relative; }
.block-header-inner { display: flex; align-items: flex-start; gap: 20px; }
.block-badge {
  width: 56px; height: 56px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Noto Serif SC', serif; font-size: 22px; font-weight: 700; flex-shrink: 0;
  background: linear-gradient(135deg, var(--c-mid), var(--c-dark));
  border: 2px solid var(--c-accent); color: var(--c-accent-light);
  box-shadow: 0 0 20px var(--goal-glow);
}
.block-name { font-family: 'Noto Sans SC', sans-serif; font-size: 26px; font-weight: 900; margin-bottom: 4px; color: var(--c-accent-light); text-shadow: 0 0 30px var(--goal-glow); }
.block-sub { font-size: 14px; font-weight: 500; color: var(--white-soft); margin-bottom: 10px; }
.block-chips { display: flex; gap: 8px; flex-wrap: wrap; }
.bchip { font-size: 11px; padding: 3px 12px; border-radius: 20px; font-weight: 500; border: 1px solid; }
.bchip-a { background: var(--c-accent-faint); border-color: var(--c-accent-border); color: var(--c-accent-light); }
.bchip-b { background: var(--th-child-bg); border-color: var(--th-child-border); color: var(--c-child); }
.bchip-c { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: var(--white-muted); }
.block-divider { height: 1.5px; margin: 0 48px; background: linear-gradient(90deg, transparent, var(--c-accent), transparent); }

/* ── SECTION LABEL ── */
.section-label { display: flex; align-items: center; gap: 14px; padding: 18px 48px 14px; }
.sl-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, var(--c-light)); }
.sl-line.r { background: linear-gradient(90deg, var(--c-light), transparent); }
.sl-text { font-size: 11.5px; font-weight: 700; letter-spacing: 0.2em; color: var(--c-light); text-transform: uppercase; white-space: nowrap; }

/* ── FOUR-SYSTEM OVERVIEW CARDS ── */
.overview-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 0 36px 8px; }
.ov-card {
  border-radius: 10px; padding: 16px 18px;
  background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.5));
}
.ov-bazi { border: 1px solid rgba(60,180,140,0.3); }
.ov-mbti { border: 1px solid rgba(80,100,200,0.3); }
.ov-west { border: 1px solid rgba(140,80,220,0.3); }
.ov-hobby { border: 1px solid var(--c-accent-border); }
.ov-head { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.ov-icon { font-size: 20px; }
.ov-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; }
.ov-bazi .ov-title { color: #40b890; }
.ov-mbti .ov-title { color: #7090e0; }
.ov-west .ov-title { color: #b080e0; }
.ov-hobby .ov-title { color: var(--c-accent-light); }
.ov-body { font-size: 12px; line-height: 1.75; color: var(--white-soft); }
.ov-body strong { color: var(--white); }
.ov-tags { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px; }
.ov-tag { font-size: 10px; padding: 2px 8px; border-radius: 12px; font-weight: 500; }
.ov-tag-bazi { background: rgba(60,180,140,0.15); border: 1px solid rgba(60,180,140,0.3); color: #40b890; }
.ov-tag-mbti { background: rgba(80,100,200,0.15); border: 1px solid rgba(80,100,200,0.3); color: #7090e0; }
.ov-tag-west { background: rgba(140,80,220,0.15); border: 1px solid rgba(140,80,220,0.3); color: #b080e0; }
.ov-tag-hobby { background: var(--c-accent-faint); border: 1px solid var(--c-accent-border); color: var(--c-accent-light); }

/* ── CONVERGENCE BOX ── */
.convergence { margin: 0 36px 8px; padding: 16px 20px; border-radius: 10px; background: linear-gradient(135deg, var(--c-accent-faint), rgba(0,0,0,0.2)); border: 1px solid var(--c-accent-border); }
.conv-label { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; color: var(--c-accent); text-transform: uppercase; margin-bottom: 8px; }
.conv-text { font-size: 13px; line-height: 1.8; color: var(--white-soft); }
.conv-text strong { color: var(--c-accent-light); }

/* ── INTEREST-DESTINY SECTION ── */
.interest-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; padding: 0 36px 8px; }
.int-card { border-radius: 8px; padding: 14px 16px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.08); }
.int-hobby { font-size: 13px; font-weight: 700; color: var(--c-accent-light); margin-bottom: 6px; }
.int-system { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: var(--c-light); margin-bottom: 4px; text-transform: uppercase; }
.int-text { font-size: 11.5px; line-height: 1.65; color: var(--white-soft); }

/* ── MAIN TABLE ── */
.main-table { padding: 0 36px; margin-bottom: 8px; }
.table-header { display: grid; grid-template-columns: 160px 1fr 1fr 1fr; gap: 6px; margin-bottom: 6px; }
.th { padding: 10px 14px; border-radius: 6px 6px 0 0; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-align: center; }
.th-dim { background: #1a3520; color: var(--white-muted); }
.th-ai { background: rgba(180,50,30,0.25); color: #ff8060; border: 1px solid rgba(200,60,40,0.3); }
.th-child { background: var(--th-child-bg); color: var(--th-child-color); border: 1px solid var(--th-child-border); }
.th-combo { background: var(--c-accent-faint); color: var(--c-combo); border: 1px solid var(--c-accent-border); }
.table-rows { display: flex; flex-direction: column; gap: 6px; }
.table-row { display: grid; grid-template-columns: 160px 1fr 1fr 1fr; gap: 6px; min-height: 130px; }
.cell { border-radius: 8px; padding: 14px 16px; position: relative; overflow: hidden; }
.cell-dim {
  background: linear-gradient(135deg, var(--c-dark), rgba(0,0,0,0.3));
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
}
.cell-dim-icon { font-size: 28px; margin-bottom: 8px; }
.cell-dim-num { font-size: 11px; font-weight: 700; color: var(--c-accent); letter-spacing: 0.15em; margin-bottom: 4px; }
.cell-dim-title { font-size: 13px; font-weight: 700; color: var(--white); line-height: 1.3; margin-bottom: 3px; }
.cell-dim-en { font-size: 10px; color: var(--white-muted); font-style: italic; }
.cell-ai { background: linear-gradient(135deg, rgba(40,10,5,0.9), rgba(30,8,4,0.95)); border: 1px solid var(--red-border); }
.cell-child { background: linear-gradient(135deg, var(--cell-child-bg1), var(--cell-child-bg2)); border: 1px solid var(--cell-child-border); }
.cell-combo { background: linear-gradient(135deg, rgba(35,25,5,0.95), rgba(28,20,4,0.98)); border: 1px solid var(--c-accent-border); }
.cell-title { font-size: 11.5px; font-weight: 700; letter-spacing: 0.08em; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.cell-ai .cell-title { color: #ff8060; }
.cell-child .cell-title { color: var(--c-child); }
.cell-combo .cell-title { color: var(--c-combo); }
.cell-text { font-size: 12.5px; line-height: 1.75; color: var(--white-soft); }
.cell-text strong { color: var(--white); font-weight: 700; }
.stat {
  display: inline-block; background: var(--c-accent-faint); border: 1px solid var(--c-accent-border);
  border-radius: 4px; padding: 1px 6px; font-size: 11px; font-weight: 700; color: var(--c-accent-light); margin: 1px 2px;
}

/* ── WARNING SECTION ── */
.warning-section { padding: 24px 36px 8px; }
.warning-header {
  display: flex; align-items: center; gap: 10px; margin-bottom: 14px; padding: 10px 18px;
  background: linear-gradient(90deg, rgba(200,80,20,0.25), rgba(200,80,20,0.05));
  border-left: 3px solid var(--c-warn); border-radius: 0 8px 8px 0;
}
.warning-header-icon { font-size: 18px; }
.warning-header-text { font-size: 13px; font-weight: 700; color: var(--c-warn); letter-spacing: 0.08em; }
.warning-header-sub { font-size: 12px; color: var(--white-muted); margin-left: 6px; }
.warning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.warning-card {
  background: linear-gradient(135deg, rgba(35,15,5,0.9), rgba(28,12,4,0.95));
  border: 1px solid rgba(220,100,30,0.35); border-radius: 10px; padding: 16px 18px;
}
.warning-card-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.warning-card-icon { width: 32px; height: 32px; background: rgba(220,100,30,0.2); border: 1px solid rgba(220,100,30,0.4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
.warning-card-title { font-size: 13px; font-weight: 700; color: var(--c-warn); }
.warning-card-text { font-size: 12.5px; line-height: 1.7; color: var(--white-soft); }
.ai-solution { display: block; margin-top: 8px; padding: 6px 10px; background: var(--th-child-bg); border: 1px solid var(--th-child-border); border-radius: 6px; font-size: 12px; color: var(--c-child); }

/* ── STRATEGIES ── */
.strategies-section { padding: 20px 36px 8px; }
.strategies-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.strategy-card {
  background: linear-gradient(135deg, var(--strat-bg1), var(--strat-bg2));
  border: 1px solid var(--strat-border); border-radius: 10px; padding: 16px 14px;
  position: relative; overflow: hidden;
}
.strategy-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: var(--strat-top); }
.strategy-num {
  width: 28px; height: 28px; background: linear-gradient(135deg, var(--c-mid), var(--c-dark));
  border: 1.5px solid var(--c-accent); border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 900; color: var(--c-accent-light); margin-bottom: 10px;
  box-shadow: 0 0 10px var(--goal-glow);
}
.strategy-icon { font-size: 22px; margin-bottom: 8px; }
.strategy-title { font-size: 13px; font-weight: 700; color: var(--c-accent-light); margin-bottom: 6px; line-height: 1.3; }
.strategy-text { font-size: 11.5px; line-height: 1.65; color: var(--white-muted); }

/* ── FINAL GOAL ── */
.final-goal {
  margin: 20px 36px 0;
  background: linear-gradient(135deg, var(--goal-bg1), var(--goal-bg2), var(--goal-bg1));
  border: 1.5px solid var(--goal-border); border-radius: 12px; padding: 22px 28px;
  position: relative; overflow: hidden; box-shadow: 0 0 40px var(--goal-glow);
}
.final-goal::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(212,165,32,0.05), transparent, rgba(212,165,32,0.05)); pointer-events: none; }
.final-goal-top { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
.trophy { font-size: 32px; filter: drop-shadow(0 0 10px var(--goal-glow)); }
.final-goal-title { font-size: 14px; font-weight: 700; color: var(--c-accent); letter-spacing: 0.08em; }
.final-goal-main { font-size: 15.5px; font-weight: 900; color: var(--white); line-height: 1.5; margin-bottom: 12px; }
.final-goal-main .key { color: var(--c-accent-light); text-shadow: 0 0 20px var(--goal-glow); }
.final-goal-sub { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.fgs-item { padding: 8px 14px; border-radius: 6px; font-size: 12.5px; color: var(--white-soft); line-height: 1.5; }
.fgs-ai { background: rgba(200,80,20,0.15); border: 1px solid rgba(200,80,20,0.25); }
.fgs-ai strong { color: #ff9060; }
.fgs-child { background: var(--th-child-bg); border: 1px solid var(--th-child-border); }
.fgs-child strong { color: var(--c-child); }
.trend-arrow { position: absolute; right: 24px; top: 20px; font-size: 48px; opacity: 0.15; }

/* ── MULTI-CHILD SEPARATOR ── */
.child-sep {
  background: linear-gradient(135deg, #0d0d1a, #141420);
  padding: 20px 48px; border-top: 1px solid rgba(180,180,255,0.1); border-bottom: 1px solid rgba(180,180,255,0.1);
  display: flex; align-items: center; gap: 16px;
}
.sep-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(180,180,255,0.2), transparent); }
.sep-text { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; color: rgba(180,180,255,0.4); }

@media(max-width:768px){
  .parent-header,.header,.block-header{padding-left:20px;padding-right:20px}
  .overview-grid,.interest-grid,.warning-grid,.strategies-grid,.final-goal-sub{grid-template-columns:1fr 1fr}
  .table-header,.table-row{grid-template-columns:110px 1fr 1fr 1fr}
  .main-table,.warning-section,.strategies-section{padding-left:16px;padding-right:16px}
  .final-goal{margin:16px 16px 0}
  .block-divider{margin:0 20px}
  .convergence,.ov-card{margin:0 16px 8px}
  .title-main{font-size:22px}
}
@media(max-width:480px){
  .overview-grid,.interest-grid,.strategies-grid{grid-template-columns:1fr}
  .table-header,.table-row{grid-template-columns:80px 1fr 1fr 1fr}
  .th,.cell{padding:8px 8px;font-size:10px}
}
```
