# Family Report CSS Design System

Light/paper-themed — completely different from the dark individual destiny report.

---

## Ocean Theme (Default — Blue/Green/Amber)

Used in jeff_family_report.html. Best for families with Water/Wood Day Masters or when no specific preference.

```css
:root {
  --ink: #0e1a1f;
  --ink-soft: #243640;
  --ink-muted: #5a7280;
  --ink-faint: #8fa8b5;
  --paper: #f4f8fa;
  --paper-warm: #edf4f7;
  --paper-deep: #ddeaf0;
  --ocean: #1a4a6b;
  --ocean-mid: #2d6e9a;
  --ocean-light: #4a94c2;
  --ocean-faint: #d6eaf6;
  --forest: #1a5240;
  --forest-mid: #2d7a5e;
  --forest-light: #4aa882;
  --forest-faint: #d6f0e8;
  --amber: #b07820;
  --amber-mid: #d49a2c;
  --amber-light: #e8c060;
  --amber-faint: #faf0d0;
  --rust: #8b3a1a;
  --rust-mid: #c05028;
  --rust-faint: #faeee8;
  --indigo: #2c3e6b;
  --indigo-light: #4a5f9a;
  --indigo-faint: #e8eef8;
  --plum: #6b3a6b;
  --plum-faint: #f0eaf8;
  --slate: #3a5060;
  --border: rgba(26,74,107,0.12);
  --border-strong: rgba(26,74,107,0.22);
  --accent: #1a4a6b;
  --accent-mid: #2d6e9a;
}
```

## Gold Theme (Alternate — Warm/Traditional)

Used in cindy_family_report.html. Use for 3+ children, larger families, or when user prefers warm tones.

```css
:root {
  --ink: #1a1410;
  --ink-soft: #3d3228;
  --ink-muted: #7a6a5a;
  --ink-faint: #b5a899;
  --paper: #faf7f2;
  --paper-warm: #f5efe4;
  --paper-deep: #ede4d3;
  --gold: #c49a3c;
  --gold-light: #e8c97a;
  --gold-faint: #f5e9c8;
  --cinnabar: #a83232;
  --cinnabar-soft: #c94040;
  --cinnabar-faint: #fdf0f0;
  --jade: #2d6b55;
  --jade-light: #4a9478;
  --jade-faint: #e8f5ef;
  --indigo: #2c3e6b;
  --indigo-light: #4a5f9a;
  --indigo-faint: #e8eef8;
  --plum: #6b3a6b;
  --plum-faint: #f5eaf8;
  --border: rgba(100,80,50,0.15);
  --border-strong: rgba(100,80,50,0.3);
  --accent: #c49a3c;
  --accent-mid: #b07820;
}
```

---

## Full CSS (same for both themes — only :root changes above)

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 14px;
  line-height: 1.8;
}

.page { max-width: 900px; margin: 0 auto; padding: 0 24px 80px; }

/* ── HERO ── */
.hero {
  padding: 60px 0 44px;
  border-bottom: 0.5px solid var(--border-strong);
  margin-bottom: 52px;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute; top: -20px; right: -40px;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(26,74,107,0.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-eyebrow {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic; font-size: 14px;
  color: var(--accent-mid); letter-spacing: 0.12em; margin-bottom: 14px;
}
.hero-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 36px; font-weight: 500; color: var(--ink);
  letter-spacing: 0.04em; line-height: 1.25; margin-bottom: 10px;
}
.hero-sub { font-size: 13px; color: var(--ink-muted); letter-spacing: 0.08em; margin-bottom: 24px; }
.hero-members { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
.member-chip {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 14px 6px 8px; border-radius: 40px;
  border: 0.5px solid var(--border-strong); background: white; font-size: 12px;
}
.member-chip-dot {
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Noto Serif SC', serif; font-size: 11px; font-weight: 500; flex-shrink: 0;
}
.member-chip-name { color: var(--ink-soft); font-weight: 500; }
.member-chip-sub { color: var(--ink-muted); font-size: 10.5px; }
.hero-sep { color: var(--ink-faint); font-size: 10px; }
.ornament { display: flex; align-items: center; gap: 10px; margin: 20px 0 0; }
.ornament-line { height: 0.5px; flex: 1; background: linear-gradient(90deg, transparent, var(--accent-mid)); }
.ornament-line.r { background: linear-gradient(90deg, var(--accent-mid), transparent); }
.ornament-dia { color: var(--accent-mid); font-size: 7px; }

/* ── SECTION ── */
.section { margin-bottom: 52px; }
.section-header { display: flex; align-items: center; gap: 12px; margin-bottom: 26px; }
.section-num {
  font-family: 'Cormorant Garamond', serif; font-size: 12px;
  color: var(--accent-mid); letter-spacing: 0.18em; min-width: 28px;
}
.section-title {
  font-family: 'Noto Serif SC', serif; font-size: 18px; font-weight: 500;
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
.tag-bazi { background: var(--amber-faint, #faf0d0); color: #6b4a08; }
.tag-mbti { background: var(--indigo-faint, #e8eef8); color: var(--indigo); }
.star-row { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 7px; }
.sb { font-size: 10px; padding: 2px 9px; border-radius: 20px; font-weight: 500; }
.sb-p1 { background: var(--ocean-faint, #d6eaf6); color: var(--ocean, #1a4a6b); }
.sb-p2 { background: var(--forest-faint, #d6f0e8); color: var(--forest, #1a5240); }
.sb-p3 { background: var(--amber-faint, #faf0d0); color: #6b4a08; }
.sb-p4 { background: var(--rust-faint, #faeee8); color: var(--rust, #8b3a1a); }
.sb-p5 { background: var(--indigo-faint, #e8eef8); color: var(--indigo, #2c3e6b); }
.sb-p6 { background: var(--plum-faint, #f0eaf8); color: var(--plum, #6b3a6b); }
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
.strength-label { width: 58px; color: var(--ink-muted); }
.strength-track { flex: 1; height: 3px; background: var(--paper-deep); border-radius: 2px; overflow: hidden; }
.strength-fill { height: 100%; border-radius: 2px; }
.strength-val { width: 22px; text-align: right; color: var(--ink-muted); font-size: 10.5px; }
.person-quote { margin-top: 12px; padding: 11px 13px; background: var(--paper-warm); border-left: 2px solid var(--accent-mid); border-radius: 0 6px 6px 0; font-size: 12px; color: var(--ink-soft); line-height: 1.7; font-style: italic; }

/* ── RELATIONSHIP CARDS ── */
.rel-card { background: white; border: 0.5px solid var(--border); border-radius: 12px; margin-bottom: 18px; overflow: hidden; }
.rel-header { padding: 18px 22px 14px; border-bottom: 0.5px solid var(--border); display: flex; align-items: center; gap: 14px; }
.rel-icon { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 500; font-family: 'Noto Serif SC', serif; }
.rel-title-block { flex: 1; }
.rel-title { font-family: 'Noto Serif SC', serif; font-size: 15px; font-weight: 500; color: var(--ink); }
.rel-subtitle { font-size: 11.5px; color: var(--ink-muted); margin-top: 2px; }
.rel-score { font-family: 'Cormorant Garamond', serif; font-size: 28px; color: var(--accent-mid); }
.rel-score-label { font-size: 10px; color: var(--ink-faint); text-align: center; }
.rel-body { padding: 18px 22px 20px; }
.rel-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.insight-block { margin-bottom: 14px; }
.insight-head { font-size: 10.5px; font-weight: 500; letter-spacing: 0.12em; color: var(--accent-mid); text-transform: uppercase; margin-bottom: 7px; }
.insight-head.p1 { color: var(--ocean-mid, #2d6e9a); }
.insight-head.p2 { color: var(--forest-mid, #2d7a5e); }
.insight-head.p3 { color: var(--amber, #b07820); }
.insight-text { font-size: 13px; color: var(--ink-soft); line-height: 1.78; }
.friction-box { background: #fdf5f2; border: 0.5px solid rgba(139,58,26,0.2); border-radius: 8px; padding: 12px 14px; margin-top: 6px; }
.friction-title { font-size: 10.5px; font-weight: 500; color: var(--rust, #8b3a1a); letter-spacing: 0.1em; margin-bottom: 6px; }
.friction-text { font-size: 12.5px; color: #5a3020; line-height: 1.68; }
.solution-box { background: #f2faf6; border: 0.5px solid rgba(26,82,64,0.2); border-radius: 8px; padding: 12px 14px; margin-top: 6px; }
.solution-title { font-size: 10.5px; font-weight: 500; color: var(--forest, #1a5240); letter-spacing: 0.1em; margin-bottom: 6px; }
.solution-text { font-size: 12.5px; color: #1a4030; line-height: 1.68; }

/* ── CALLOUT ── */
.callout { border-left: 2px solid var(--ocean-light, #4a94c2); padding: 12px 15px; background: var(--ocean-faint, #d6eaf6); border-radius: 0 8px 8px 0; font-size: 13px; color: var(--ink-soft); margin: 14px 0; line-height: 1.75; }
.callout strong { font-weight: 600; color: var(--ink); }
.callout.green { border-left-color: var(--forest-light, #4aa882); background: var(--forest-faint, #d6f0e8); }
.callout.amber { border-left-color: var(--amber-light, #e8c060); background: var(--amber-faint, #faf0d0); }
.callout.gold { border-left-color: var(--gold, #c49a3c); background: var(--gold-faint, #f5e9c8); }

/* ── FAMILY MAP / FIVE ELEMENTS CHAIN ── */
.family-map { background: white; border: 0.5px solid var(--border); border-radius: 12px; padding: 28px; margin-bottom: 18px; }
.chain { display: flex; align-items: flex-end; justify-content: center; gap: 0; flex-wrap: wrap; }
.chain-node { text-align: center; padding: 14px 18px; border-radius: 8px; border: 0.5px solid var(--border); min-width: 100px; }
.chain-arrow { padding: 0 10px; color: var(--accent-mid); font-size: 11px; text-align: center; padding-bottom: 18px; line-height: 1.4; }
.cn-label { font-size: 10px; color: var(--ink-muted); margin-bottom: 3px; }
.cn-main { font-family: 'Noto Serif SC', serif; font-size: 14px; font-weight: 500; }
.cn-sub { font-size: 10.5px; margin-top: 2px; }
.cn-water { background: var(--ocean-faint, #d6eaf6); border-color: rgba(26,74,107,0.25); }
.cn-water .cn-main { color: var(--ocean, #1a4a6b); }
.cn-wood { background: var(--forest-faint, #d6f0e8); border-color: rgba(26,82,64,0.25); }
.cn-wood .cn-main { color: var(--forest, #1a5240); }
.cn-fire { background: var(--rust-faint, #faeee8); border-color: rgba(139,58,26,0.25); }
.cn-fire .cn-main { color: var(--rust, #8b3a1a); }
.cn-earth { background: var(--amber-faint, #faf0d0); border-color: rgba(176,120,32,0.25); }
.cn-earth .cn-main { color: var(--amber, #b07820); }
.cn-metal { background: var(--indigo-faint, #e8eef8); border-color: rgba(44,62,107,0.25); }
.cn-metal .cn-main { color: var(--indigo, #2c3e6b); }

/* ── SUMMARY ── */
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
.poem-section { text-align: center; padding: 48px 32px; border-top: 0.5px solid var(--border-strong); margin-top: 52px; }
.poem-text { font-family: 'Noto Serif SC', serif; font-size: 15px; font-weight: 300; color: var(--ink-soft); line-height: 2.5; letter-spacing: 0.04em; }
.poem-source { margin-top: 22px; font-size: 11px; color: var(--ink-faint); letter-spacing: 0.1em; }

@media (max-width: 640px) {
  .person-grid-3, .person-grid-2, .rel-cols, .two-col { grid-template-columns: 1fr; }
  .hero-title { font-size: 26px; }
  .hero-members { flex-direction: column; align-items: flex-start; }
  .page { padding: 0 16px 60px; }
}
```

---

## Google Fonts Import

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet">
```
