# CSS Design System

Embed this CSS block verbatim in the `<style>` tag of the output HTML.
Choose the Gold theme (default) or Crimson theme. Both are provided below.

---

## Gold Theme (Default — Dark Navy/Gold)

Use for male subjects, neutral subjects, or when the user doesn't specify.

```css
*{margin:0;padding:0;box-sizing:border-box}
:root{
  --bg:#07101e;--bg2:#0a1525;--surf:#0f1e35;--card:#131f38;--card2:#172440;
  --b:rgba(200,165,60,0.14);--b2:rgba(200,165,60,0.26);--b3:rgba(255,255,255,0.07);
  --gold:#c8a03c;--gl:#e0bc5a;--gf:rgba(200,160,60,0.09);--gf2:rgba(200,160,60,0.16);
  --w:rgba(240,234,216,1);--w8:rgba(240,234,216,0.8);--w6:rgba(240,234,216,0.6);--w4:rgba(240,234,216,0.4);--w2:rgba(240,234,216,0.22);
  --bazi:#1a5040;--bazif:rgba(26,80,64,0.18);--bazib:rgba(60,180,140,0.3);--bazil:#40b890;
  --mbti:#283068;--mbtif:rgba(40,48,104,0.2);--mbtib:rgba(80,100,200,0.3);--mbtil:#7090e0;
  --west:#3a1858;--westf:rgba(58,24,88,0.2);--westb:rgba(140,80,220,0.3);--westl:#b080e0;
  --ziwei:#6a1428;--ziwelf:rgba(106,20,40,0.2);--zweib:rgba(220,80,100,0.3);--zweil:#e08090;
  --wood:#3a9060;--fire:#c04030;--earth:#a07828;--metal:#7090c0;--water:#2860a8;
  --accent:var(--gold);--accentl:var(--gl);--accentf:var(--gf);--accentb:var(--b2);
}
body{background:var(--bg);color:var(--w);font-family:'Noto Sans SC',sans-serif;font-size:14px;line-height:1.8;max-width:960px;margin:0 auto;padding:0 24px 80px}
.hero{padding:64px 0 52px;border-bottom:0.5px solid var(--b2);margin-bottom:56px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-60px;right:-80px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(200,160,60,0.06) 0%,transparent 70%);pointer-events:none}
.hero-sys{display:flex;gap:8px;margin-bottom:22px;flex-wrap:wrap}
.sys-badge{font-family:'DM Mono',monospace;font-size:10px;padding:3px 12px;border-radius:20px;letter-spacing:0.12em;font-weight:500}
.sb-bazi{background:var(--bazif);border:1px solid var(--bazib);color:var(--bazil)}
.sb-mbti{background:var(--mbtif);border:1px solid var(--mbtib);color:var(--mbtil)}
.sb-west{background:var(--westf);border:1px solid var(--westb);color:var(--westl)}
.sb-ziwei{background:var(--ziwelf);border:1px solid var(--zweib);color:var(--zweil)}
.hero-name{font-family:'Noto Serif SC',serif;font-size:48px;font-weight:300;letter-spacing:0.1em;color:var(--w);line-height:1.1;margin-bottom:6px}
.hero-name-en{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:300;font-style:italic;color:var(--w6);letter-spacing:0.1em;margin-bottom:18px}
.hero-data{display:flex;gap:24px;flex-wrap:wrap;font-size:12.5px;color:var(--w6);font-family:'DM Mono',monospace;letter-spacing:0.06em;margin-bottom:22px}
.hero-data span{display:flex;align-items:center;gap:6px}
.hero-summary{font-family:'Noto Serif SC',serif;font-size:16px;font-weight:300;color:var(--w8);line-height:2;max-width:640px;border-left:2px solid var(--gold);padding-left:18px}
.hero-summary strong{color:var(--gl);font-weight:500}
.section{margin-bottom:56px}
.sec-hd{display:flex;align-items:center;gap:14px;margin-bottom:30px}
.sec-num{font-family:'DM Mono',monospace;font-size:11px;color:var(--gold);letter-spacing:0.2em;min-width:28px}
.sec-title{font-family:'Noto Serif SC',serif;font-size:20px;font-weight:500;color:var(--w);letter-spacing:0.04em}
.sec-line{flex:1;height:0.5px;background:var(--b2)}
.sys-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:20px}
.sys-card{border-radius:12px;overflow:hidden}
.sys-card-hd{padding:16px 18px 12px;display:flex;align-items:center;gap:10px}
.sys-card-icon{font-size:22px}
.sys-card-title{font-family:'Noto Serif SC',serif;font-size:15px;font-weight:500}
.sys-card-en{font-family:'Cormorant Garamond',serif;font-size:12px;font-style:italic;opacity:0.65;margin-top:1px}
.sys-card-body{padding:0 18px 18px}
.sc-bazi{background:linear-gradient(135deg,rgba(26,80,64,0.25),rgba(20,60,48,0.35));border:0.5px solid var(--bazib)}
.sc-mbti{background:linear-gradient(135deg,rgba(40,48,104,0.25),rgba(30,38,88,0.35));border:0.5px solid var(--mbtib)}
.sc-west{background:linear-gradient(135deg,rgba(58,24,88,0.25),rgba(44,18,72,0.35));border:0.5px solid var(--westb)}
.sc-ziwei{background:linear-gradient(135deg,rgba(106,20,40,0.25),rgba(80,16,32,0.35));border:0.5px solid var(--zweib)}
.sc-bazi .sys-card-title{color:var(--bazil)}
.sc-mbti .sys-card-title{color:var(--mbtil)}
.sc-west .sys-card-title{color:var(--westl)}
.sc-ziwei .sys-card-title{color:var(--zweil)}
.pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-bottom:12px}
.pillar{text-align:center}
.p-label{font-size:9.5px;color:var(--w4);letter-spacing:0.12em;margin-bottom:4px;font-family:'DM Mono',monospace}
.p-box{background:rgba(0,0,0,0.3);border:0.5px solid var(--b3);border-radius:7px;padding:8px 4px}
.p-stem{font-family:'Noto Serif SC',serif;font-size:22px;font-weight:500;line-height:1.2}
.p-branch{font-family:'Noto Serif SC',serif;font-size:22px;font-weight:300;line-height:1.2;opacity:0.8}
.p-wx{font-size:9px;color:var(--w4);margin-top:2px}
.wx-bars{display:flex;flex-direction:column;gap:6px;margin:10px 0}
.wx-row{display:flex;align-items:center;gap:8px;font-size:12px}
.wx-lbl{font-family:'Noto Serif SC',serif;width:14px;flex-shrink:0}
.wx-track{flex:1;height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden}
.wx-fill{height:100%;border-radius:2px}
.wx-cnt{font-family:'DM Mono',monospace;font-size:10px;color:var(--w4);width:14px;text-align:right}
.mbti-dims{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin:10px 0}
.dim-row{display:flex;align-items:center;gap:6px;font-size:11px;color:var(--w6)}
.dim-bar{flex:1;height:3px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden}
.dim-fill{height:100%;border-radius:2px;background:var(--mbtil)}
.dim-letter{font-family:'DM Mono',monospace;font-weight:500;font-size:12px;color:var(--mbtil);width:14px}
.ziwei-mini{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;margin:10px 0}
.zm-cell{background:rgba(0,0,0,0.3);border:0.5px solid var(--b3);border-radius:5px;padding:5px 4px;text-align:center;font-size:10px;line-height:1.4}
.zm-cell.highlight{background:rgba(106,20,40,0.3);border-color:var(--zweib)}
.zm-cell.active{background:rgba(200,100,40,0.2);border-color:rgba(200,120,60,0.4)}
.zm-palace{color:var(--w4);font-size:8.5px;margin-bottom:2px}
.zm-star{color:var(--zweil);font-size:10px;font-family:'Noto Serif SC',serif}
.zm-star.main{font-size:11px;font-weight:500}
.west-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:5px;margin:10px 0}
.wp-row{display:flex;align-items:center;gap:6px;font-size:11.5px;padding:4px 0}
.wp-planet{font-size:14px;flex-shrink:0;width:18px}
.wp-name{color:var(--w4);font-size:10px;width:32px;flex-shrink:0}
.wp-sign{color:var(--westl);font-weight:500;flex:1}
.wp-house{font-family:'DM Mono',monospace;font-size:10px;color:var(--w4)}
.analysis-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.analysis-card{background:var(--card);border-radius:12px;overflow:hidden;border:0.5px solid var(--b3)}
.ac-hd{padding:14px 18px 10px;border-bottom:0.5px solid var(--b3);display:flex;align-items:center;gap:8px}
.ac-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.ac-title{font-size:12px;font-weight:500;letter-spacing:0.08em}
.ac-body{padding:14px 18px 18px}
.ac-item{margin-bottom:10px;font-size:13px;color:var(--w8);line-height:1.75}
.ac-item:last-child{margin-bottom:0}
.ac-item strong{color:var(--w);font-weight:600}
.ac-label{font-family:'DM Mono',monospace;font-size:9.5px;letter-spacing:0.12em;color:var(--w4);margin-bottom:4px}
.insight{background:linear-gradient(135deg,var(--card2),var(--surf));border:0.5px solid var(--b2);border-radius:12px;padding:22px 26px;margin:16px 0}
.insight-label{font-family:'DM Mono',monospace;font-size:9.5px;letter-spacing:0.2em;color:var(--gold);margin-bottom:10px;text-transform:uppercase}
.insight-text{font-family:'Noto Serif SC',serif;font-size:15px;font-weight:300;line-height:2;color:var(--w8)}
.insight-text strong{color:var(--gl);font-weight:500}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:16px 0}
.stat-card{background:var(--card);border:0.5px solid var(--b3);border-radius:10px;padding:16px;text-align:center}
.stat-val{font-family:'Cormorant Garamond',serif;font-size:32px;font-weight:500;color:var(--gl);line-height:1}
.stat-label{font-size:11.5px;color:var(--w6);margin-top:5px;line-height:1.4}
.stat-sub{font-family:'DM Mono',monospace;font-size:9.5px;color:var(--w4);margin-top:3px}
.callout{border-left:2px solid var(--gold);padding:12px 16px;background:var(--gf);border-radius:0 8px 8px 0;font-size:13.5px;color:var(--w8);margin:14px 0;line-height:1.78}
.callout strong{color:var(--gl);font-weight:600}
.callout.green{border-color:var(--bazil);background:var(--bazif)}
.callout.purple{border-color:var(--westl);background:var(--westf)}
.callout.red{border-color:var(--zweil);background:var(--ziwelf)}
.comp-wrap{background:var(--card);border:0.5px solid var(--b3);border-radius:12px;overflow:hidden}
.comp-table{width:100%;border-collapse:collapse;font-size:12.5px}
.comp-table th{padding:11px 14px;font-size:10px;font-weight:500;letter-spacing:0.1em;color:var(--w4);text-align:left;background:var(--surf);border-bottom:0.5px solid var(--b2)}
.comp-table th.hl{color:var(--gl)}
.comp-table td{padding:12px 14px;border-bottom:0.5px solid var(--b3);color:var(--w8);vertical-align:top;line-height:1.6}
.comp-table tr:last-child td{border-bottom:none}
.comp-table td:first-child{color:var(--w6);font-weight:500}
.comp-table td.bazi-cell{color:var(--bazil)}
.comp-table td.mbti-cell{color:var(--mbtil)}
.comp-table td.west-cell{color:var(--westl)}
.comp-table td.ziwei-cell{color:var(--zweil)}
.check{color:#50c880;font-weight:700}
.warn{color:#e09040}
.tag{display:inline-block;font-size:10px;padding:2px 9px;border-radius:20px;margin:2px;font-weight:500}
.tag-gold{background:var(--gf2);border:0.5px solid var(--b2);color:var(--gl)}
.tag-bazi{background:var(--bazif);border:0.5px solid var(--bazib);color:var(--bazil)}
.tag-mbti{background:var(--mbtif);border:0.5px solid var(--mbtib);color:var(--mbtil)}
.tag-west{background:var(--westf);border:0.5px solid var(--westb);color:var(--westl)}
.tag-ziwei{background:var(--ziwelf);border:0.5px solid var(--zweib);color:var(--zweil)}
.orn{display:flex;align-items:center;gap:10px;margin:28px 0}
.orn-line{flex:1;height:0.5px;background:linear-gradient(90deg,transparent,var(--b2))}
.orn-line.r{background:linear-gradient(90deg,var(--b2),transparent)}
.orn-dia{color:var(--gold);font-size:7px;opacity:0.7}
.divider{height:0.5px;background:var(--b3);margin:20px 0}
.footer{text-align:center;padding:40px 0 0;border-top:0.5px solid var(--b2);margin-top:56px}
.footer-name{font-family:'Noto Serif SC',serif;font-size:22px;font-weight:300;letter-spacing:0.2em;color:var(--w);margin-bottom:6px}
.footer-quote{font-family:'Cormorant Garamond',serif;font-size:15px;font-style:italic;color:var(--w4);margin-bottom:16px;line-height:2}
.footer-meta{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.1em;color:var(--w2)}
@media(max-width:640px){
  .sys-grid,.analysis-grid,.stats-row{grid-template-columns:1fr}
  .hero-name{font-size:34px}
  body{padding:0 14px 60px}
}
```

---

## Crimson Theme (Female / Scorpio / Intense)

Swap the `:root` block only — all other CSS stays identical.

```css
:root{
  --bg:#08080e;--bg2:#0c0c18;--surf:#101020;--card:#141425;--card2:#181830;
  --b:rgba(180,100,140,0.15);--b2:rgba(180,100,140,0.28);--b3:rgba(255,255,255,0.07);
  --crim:#a02850;--criml:#d04870;--crimf:rgba(160,40,80,0.12);--crimb:rgba(180,60,100,0.3);
  --gold:#c89020;--gl:#e0b040;--gf:rgba(200,144,32,0.1);--gf2:rgba(200,144,32,0.18);
  --w:rgba(245,235,230,1);--w8:rgba(245,235,230,0.8);--w6:rgba(245,235,230,0.6);--w4:rgba(245,235,230,0.4);--w2:rgba(245,235,230,0.22);
  --bazi:#1a5048;--bazif:rgba(26,80,72,0.2);--bazib:rgba(50,160,140,0.3);--bazil:#40b8a0;
  --mbti:#7a3818;--mbtif:rgba(122,56,24,0.22);--mbtib:rgba(220,120,60,0.3);--mbtil:#e09050;
  --west:#4a1040;--westf:rgba(74,16,64,0.22);--westb:rgba(200,60,180,0.25);--westl:#c870c0;
  --ziwei:#3a1060;--ziwelf:rgba(58,16,96,0.22);--zweib:rgba(140,80,220,0.3);--zweil:#a870e0;
  --wood:#3a9060;--fire:#c04030;--earth:#a07828;--metal:#7090c0;--water:#2860a8;
}
```

In crimson theme, also update `.hero-summary` border-color and `.sec-num` color to `var(--crim)` / `var(--criml)` by adding these rules:

```css
.hero-summary{border-left-color:var(--crim)}
.hero-summary strong{color:var(--criml)}
.sec-num{color:var(--crim)}
```

---

## Google Fonts Import

Add this as the first tag in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500&family=Noto+Serif+SC:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
```
