# Business Partner Report CSS Design System

Slate/professional theme — clean cream paper with deep navy/steel accents. Distinct from the family-report (ocean blue) and the dark personal-destiny-report. Conveys authority, clarity, and executive-level quality.

---

## Slate Theme (Default — Navy/Steel/Amber on Cream)

```css
:root {
  --ink: #0f1c2e;
  --ink-soft: #253345;
  --ink-muted: #5a6e82;
  --ink-faint: #94a8b8;
  --paper: #f6f7f9;
  --paper-warm: #f0f2f5;
  --paper-deep: #e4e8ed;
  --slate: #1e3a5f;
  --slate-mid: #2c5282;
  --slate-light: #4a7ab5;
  --slate-faint: #dce8f5;
  --teal: #1a5248;
  --teal-mid: #2d7a6a;
  --teal-light: #4aa892;
  --teal-faint: #d6f0eb;
  --amber: #b07820;
  --amber-mid: #d49a2c;
  --amber-light: #e8c060;
  --amber-faint: #faf0d0;
  --rust: #8b3a1a;
  --rust-mid: #c05028;
  --rust-faint: #faeee8;
  --steel: #3a4a6b;
  --steel-light: #5a6e9a;
  --steel-faint: #e8ecf5;
  --plum: #6b3a6b;
  --plum-faint: #f0eaf8;
  --border: rgba(30,58,95,0.10);
  --border-strong: rgba(30,58,95,0.20);
  --accent: #1e3a5f;
  --accent-mid: #2c5282;
  --accent-light: #4a7ab5;
}
```

---

## Full CSS (use Slate :root above)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 14px;
  line-height: 1.8;
}

.page { max-width: 920px; margin: 0 auto; padding: 0 28px 80px; }

/* ── HERO ── */
.hero {
  padding: 64px 0 48px;
  border-bottom: 0.5px solid var(--border-strong);
  margin-bottom: 56px;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute; top: -30px; right: -60px;
  width: 360px; height: 360px; border-radius: 50%;
  background: radial-gradient(circle, rgba(30,58,95,0.05) 0%, transparent 70%);
  pointer-events: none;
}
.hero-bg2 {
  position: absolute; bottom: -40px; left: -40px;
  width: 200px; height: 200px; border-radius: 50%;
  background: radial-gradient(circle, rgba(176,120,32,0.04) 0%, transparent 70%);
  pointer-events: none;
}
.hero-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 13px;
  color: var(--accent-mid); letter-spacing: 0.16em; margin-bottom: 16px;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 4px 12px; border-radius: 4px;
  background: var(--slate-faint); border: 0.5px solid rgba(30,58,95,0.2);
  font-size: 10.5px; font-weight: 500; letter-spacing: 0.1em;
  color: var(--slate); margin-bottom: 18px;
}
.hero-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 34px; font-weight: 500; color: var(--ink);
  letter-spacing: 0.04em; line-height: 1.3; margin-bottom: 8px;
}
.hero-sub { font-size: 13px; color: var(--ink-muted); letter-spacing: 0.08em; margin-bottom: 26px; }
.hero-partners { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.partner-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 14px 6px 8px; border-radius: 40px;
  border: 0.5px solid var(--border-strong); background: white; font-size: 12px;
}
.partner-chip-dot {
  width: 24px; height: 24px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Noto Serif SC', serif; font-size: 11px; font-weight: 500; flex-shrink: 0;
}
.partner-chip-name { color: var(--ink-soft); font-weight: 500; }
.partner-chip-sub { color: var(--ink-muted); font-size: 10.5px; }
.hero-sep { color: var(--ink-faint); font-size: 10px; }
.ornament { display: flex; align-items: center; gap: 10px; margin: 22px 0 0; }
.ornament-line { height: 0.5px; flex: 1; background: linear-gradient(90deg, transparent, var(--accent-mid)); }
.ornament-line.r { background: linear-gradient(90deg, var(--accent-mid), transparent); }
.ornament-dia { color: var(--accent-mid); font-size: 7px; }

/* ── SECTION ── */
.section { margin-bottom: 56px; }
.section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
.section-num {
  font-family: 'Cormorant Garamond', serif; font-size: 12px;
  color: var(--accent-mid); letter-spacing: 0.18em; min-width: 28px;
}
.section-title {
  font-family: 'Noto Serif SC', serif; font-size: 17px; font-weight: 500;
  color: var(--ink); letter-spacing: 0.04em;
}
.section-line { flex: 1; height: 0.5px; background: var(--border-strong); }

/* ── OVERVIEW TABLE ── */
.table-wrap { background: white; border: 0.5px solid var(--border); border-radius: 12px; overflow: hidden; margin-bottom: 18px; }
.overview-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.overview-table th {
  text-align: left; padding: 10px 16px; font-size: 11px; font-weight: 500;
  letter-spacing: 0.1em; color: var(--ink-muted); background: var(--paper-warm);
  border-bottom: 0.5px solid var(--border-strong);
}
.overview-table td { padding: 14px 16px; border-bottom: 0.5px solid var(--border); color: var(--ink-soft); vertical-align: top; }
.overview-table tr:last-child td { border-bottom: none; }
.t-name { font-family: 'Noto Serif SC', serif; font-weight: 500; font-size: 14px; color: var(--ink); }

/* ── TAGS & BADGES ── */
.tag { font-size: 10px; padding: 2px 8px; border-radius: 20px; font-weight: 500; letter-spacing: 0.04em; }
.tag-bazi { background: var(--amber-faint); color: #6b4a08; }
.tag-mbti { background: var(--steel-faint); color: var(--steel); }
.tag-role { background: var(--slate-faint); color: var(--slate); }
.star-row { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 7px; }
.sb { font-size: 10px; padding: 2px 9px; border-radius: 20px; font-weight: 500; }
.sb-p1 { background: var(--slate-faint); color: var(--slate); }
.sb-p2 { background: var(--teal-faint); color: var(--teal); }
.sb-p3 { background: var(--amber-faint); color: #6b4a08; }
.sb-p4 { background: var(--rust-faint); color: var(--rust); }
.sb-p5 { background: var(--steel-faint); color: var(--steel); }
.sb-p6 { background: var(--plum-faint); color: var(--plum); }
.sb-gray { background: var(--paper-deep); color: var(--ink-soft); }

/* ── PERSON CARDS ── */
.person-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.person-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.person-card { background: white; border: 0.5px solid var(--border); border-radius: 12px; overflow: hidden; }
.person-header { padding: 18px 20px 14px; border-bottom: 0.5px solid var(--border); display: flex; align-items: flex-start; gap: 12px; }
.person-avatar { width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Noto Serif SC', serif; font-size: 17px; font-weight: 500; flex-shrink: 0; }
.person-meta { flex: 1; }
.person-name-zh { font-family: 'Noto Serif SC', serif; font-size: 15px; font-weight: 500; color: var(--ink); }
.person-name-en { font-size: 11px; color: var(--ink-muted); letter-spacing: 0.06em; margin-top: 1px; }
.person-tags { display: flex; gap: 5px; margin-top: 7px; flex-wrap: wrap; }
.person-body { padding: 14px 20px 18px; }
.trait-row { display: grid; grid-template-columns: 68px 1fr; gap: 6px; margin-bottom: 7px; font-size: 12.5px; }
.trait-label { color: var(--ink-muted); padding-top: 1px; }
.trait-value { color: var(--ink-soft); }
.strength-row { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; font-size: 11.5px; }
.strength-label { width: 62px; color: var(--ink-muted); }
.strength-track { flex: 1; height: 3px; background: var(--paper-deep); border-radius: 2px; overflow: hidden; }
.strength-fill { height: 100%; border-radius: 2px; }
.strength-val { width: 22px; text-align: right; color: var(--ink-muted); font-size: 10.5px; }
.person-quote { margin-top: 12px; padding: 11px 13px; background: var(--paper-warm); border-left: 2px solid var(--accent-mid); border-radius: 0 6px 6px 0; font-size: 12px; color: var(--ink-soft); line-height: 1.7; font-style: italic; }

/* ── RELATIONSHIP CARDS ── */
.rel-card { background: white; border: 0.5px solid var(--border); border-radius: 12px; margin-bottom: 18px; overflow: hidden; }
.rel-header { padding: 18px 22px 14px; border-bottom: 0.5px solid var(--border); display: flex; align-items: center; gap: 14px; }
.rel-icon { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 500; font-family: 'Noto Serif SC', serif; }
.rel-title-block { flex: 1; }
.rel-title { font-family: 'Noto Serif SC', serif; font-size: 15px; font-weight: 500; color: var(--ink); }
.rel-subtitle { font-size: 11.5px; color: var(--ink-muted); margin-top: 2px; }
.rel-score { font-family: 'Cormorant Garamond', serif; font-size: 30px; color: var(--accent-mid); }
.rel-score-label { font-size: 10px; color: var(--ink-faint); text-align: center; }
.rel-body { padding: 18px 22px 20px; }
.rel-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
.insight-block { margin-bottom: 14px; }
.insight-head { font-size: 10.5px; font-weight: 500; letter-spacing: 0.12em; color: var(--accent-mid); text-transform: uppercase; margin-bottom: 7px; }
.insight-text { font-size: 13px; color: var(--ink-soft); line-height: 1.78; }
.friction-box { background: #fdf5f2; border: 0.5px solid rgba(139,58,26,0.18); border-radius: 8px; padding: 13px 15px; margin-top: 6px; }
.friction-title { font-size: 10.5px; font-weight: 500; color: var(--rust); letter-spacing: 0.1em; margin-bottom: 6px; }
.friction-text { font-size: 12.5px; color: #5a3020; line-height: 1.72; }
.solution-box { background: #f1f8f5; border: 0.5px solid rgba(26,82,72,0.18); border-radius: 8px; padding: 13px 15px; margin-top: 6px; }
.solution-title { font-size: 10.5px; font-weight: 500; color: var(--teal); letter-spacing: 0.1em; margin-bottom: 6px; }
.solution-text { font-size: 12.5px; color: #1a4035; line-height: 1.72; }

/* ── FORTUNE TABLE ── */
.fortune-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.fortune-table th {
  text-align: left; padding: 9px 14px; font-size: 10.5px; font-weight: 500;
  letter-spacing: 0.1em; color: var(--ink-muted); background: var(--paper-warm);
  border-bottom: 0.5px solid var(--border-strong);
}
.fortune-table td { padding: 13px 14px; border-bottom: 0.5px solid var(--border); color: var(--ink-soft); vertical-align: top; }
.fortune-table tr:last-child td { border-bottom: none; }
.fortune-phase { display: inline-block; padding: 2px 9px; border-radius: 20px; font-size: 10.5px; font-weight: 500; }
.phase-wealth { background: var(--amber-faint); color: #6b4a08; }
.phase-authority { background: var(--slate-faint); color: var(--slate); }
.phase-output { background: var(--teal-faint); color: var(--teal); }
.phase-resource { background: var(--steel-faint); color: var(--steel); }
.phase-peer { background: var(--paper-deep); color: var(--ink-soft); }

/* ── CALLOUT ── */
.callout { border-left: 2px solid var(--slate-light); padding: 12px 15px; background: var(--slate-faint); border-radius: 0 8px 8px 0; font-size: 13px; color: var(--ink-soft); margin: 14px 0; line-height: 1.75; }
.callout strong { font-weight: 600; color: var(--ink); }
.callout.teal { border-left-color: var(--teal-light); background: var(--teal-faint); }
.callout.amber { border-left-color: var(--amber-light); background: var(--amber-faint); }
.callout.warning { border-left-color: var(--rust-mid); background: var(--rust-faint); }

/* ── PARTNER MAP / FIVE ELEMENTS CHAIN ── */
.partner-map { background: white; border: 0.5px solid var(--border); border-radius: 12px; padding: 28px; margin-bottom: 18px; }
.chain { display: flex; align-items: flex-end; justify-content: center; gap: 0; flex-wrap: wrap; }
.chain-node { text-align: center; padding: 14px 18px; border-radius: 8px; border: 0.5px solid var(--border); min-width: 108px; }
.chain-arrow { padding: 0 10px; color: var(--accent-mid); font-size: 11px; text-align: center; padding-bottom: 18px; line-height: 1.4; }
.cn-label { font-size: 10px; color: var(--ink-muted); margin-bottom: 3px; }
.cn-domain { font-size: 9.5px; color: var(--ink-faint); margin-top: 4px; letter-spacing: 0.04em; }
.cn-main { font-family: 'Noto Serif SC', serif; font-size: 14px; font-weight: 500; }
.cn-sub { font-size: 10.5px; margin-top: 2px; }
.cn-water { background: var(--slate-faint); border-color: rgba(30,58,95,0.22); }
.cn-water .cn-main { color: var(--slate); }
.cn-wood { background: var(--teal-faint); border-color: rgba(26,82,72,0.22); }
.cn-wood .cn-main { color: var(--teal); }
.cn-fire { background: var(--rust-faint); border-color: rgba(139,58,26,0.22); }
.cn-fire .cn-main { color: var(--rust); }
.cn-earth { background: var(--amber-faint); border-color: rgba(176,120,32,0.22); }
.cn-earth .cn-main { color: var(--amber); }
.cn-metal { background: var(--steel-faint); border-color: rgba(58,74,107,0.22); }
.cn-metal .cn-main { color: var(--steel); }

/* ── COMPLEMENTARITY MATRIX ── */
.matrix-table { width: 100%; border-collapse: collapse; font-size: 12.5px; }
.matrix-table th {
  text-align: left; padding: 9px 14px; font-size: 10.5px; font-weight: 500;
  letter-spacing: 0.1em; color: var(--ink-muted); background: var(--paper-warm);
  border-bottom: 0.5px solid var(--border-strong);
}
.matrix-table td { padding: 12px 14px; border-bottom: 0.5px solid var(--border); color: var(--ink-soft); }
.matrix-table tr:last-child td { border-bottom: none; }
.domain-label { font-weight: 500; color: var(--ink); font-size: 12.5px; }
.fit-high { color: var(--teal); font-weight: 500; }
.fit-med { color: var(--amber); font-weight: 500; }
.fit-low { color: var(--ink-muted); }

/* ── SUMMARY BOXES ── */
.summary-box { background: var(--paper-warm); border: 0.5px solid var(--border-strong); border-radius: 12px; padding: 22px 26px; margin-bottom: 18px; }
.summary-eyebrow { font-size: 11px; letter-spacing: 0.14em; color: var(--accent-mid); font-weight: 500; margin-bottom: 9px; }
.summary-text { font-size: 13px; color: var(--ink-soft); line-height: 1.85; }
.summary-text strong { color: var(--ink); font-weight: 500; }
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

/* ── QUOTE CARDS & POEM ── */
.quote-card { background: white; border: 0.5px solid var(--border); border-radius: 10px; padding: 20px 24px; margin-bottom: 16px; display: flex; gap: 16px; }
.qc-bar { width: 3px; border-radius: 2px; flex-shrink: 0; }
.qc-name { font-family: 'Noto Serif SC', serif; font-size: 12.5px; font-weight: 500; margin-bottom: 7px; }
.qc-text { font-size: 13.5px; color: var(--ink-soft); line-height: 1.88; }
.poem-section { text-align: center; padding: 52px 36px; border-top: 0.5px solid var(--border-strong); margin-top: 56px; }
.poem-text { font-family: 'Noto Serif SC', serif; font-size: 15px; font-weight: 300; color: var(--ink-soft); line-height: 2.6; letter-spacing: 0.04em; }
.poem-source { margin-top: 24px; font-size: 11px; color: var(--ink-faint); letter-spacing: 0.1em; }

@media (max-width: 640px) {
  .person-grid-3, .person-grid-2, .rel-cols, .two-col { grid-template-columns: 1fr; }
  .hero-title { font-size: 26px; }
  .hero-partners { flex-direction: column; align-items: flex-start; }
  .page { padding: 0 16px 60px; }
}
```

---

## Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
```
