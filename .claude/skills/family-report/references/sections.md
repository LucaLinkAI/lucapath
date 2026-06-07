# HTML Section Skeletons — Family Report

Replace ALL_CAPS placeholders with generated content. Preserve every class and inline style pattern.

---

## Full Document Wrapper

```html
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FAMILY_NAME家N口 八字×MBTI 家族分析报告</title>
[GOOGLE_FONTS_LINK]
<style>
[PASTE_ROOT_VARS_AND_FULL_CSS]
</style>
</head>
<body>
<div class="page">

[HERO]
[SECTION_1_OVERVIEW]
[SECTION_2_SHENSHEN_TABLE]
[SECTION_3_PORTRAITS]
[SECTION_4_COUPLE] (if applicable)
[SECTION_5_PARENT_CHILD]
[SECTION_6_SIBLINGS] (if applicable)
[SECTION_6/7_FAMILY_DYNAMICS]
[SECTION_7/8_ONE_LINERS]
[POEM_CLOSING]

</div>
</body>
</html>
```

---

## HERO

```html
<div class="hero">
  <div class="hero-bg"></div>
  <div class="hero-eyebrow">八字 · MBTI · 家族命理</div>
  <div class="hero-title">FAMILY_NAME家N口<br>家族深度分析报告</div>
  <div class="hero-sub">MEMBER1_NAME · MEMBER2_NAME · MEMBER3_NAME ...</div>
  <div class="hero-members">
    <!-- One chip per member, separated by × (couple) or → (parent-child) or · (siblings) -->
    <div class="member-chip">
      <div class="member-chip-dot" style="background:MEMBER_FAINT_COLOR;color:MEMBER_COLOR;">首</div>
      <div>
        <div class="member-chip-name">MEMBER_NAME</div>
        <div class="member-chip-sub">DAYMASTER · MBTI · NATURE_METAPHOR</div>
      </div>
    </div>
    <div class="hero-sep">×</div>
    <!-- repeat for each member; use × for couple, → for parent→child, · for siblings -->
  </div>
  <div class="ornament">
    <div class="ornament-line"></div>
    <div class="ornament-dia">◆</div>
    <div class="ornament-line r"></div>
  </div>
</div>
```

---

## Section 壹 — 家族命盘总览

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">壹</div>
    <div class="section-title">家族命盘总览</div>
    <div class="section-line"></div>
  </div>

  <div class="table-wrap">
    <table class="overview-table">
      <thead>
        <tr>
          <th>成员</th>
          <th>日主 · 格局</th>
          <th>MBTI</th>
          <th>核心神煞</th>
          <th>家族角色</th>
        </tr>
      </thead>
      <tbody>
        <!-- One row per member -->
        <tr>
          <td>
            <div class="t-name" style="color:MEMBER_COLOR;">NAME</div>
            <div style="font-size:11px;color:var(--ink-muted);">ROLE · YEAR.MONTH.DAY</div>
          </td>
          <td>DAYMASTER日主<br><span style="font-size:12px;color:var(--ink-muted);">PATTERN · STRENGTH</span></td>
          <td><span class="tag tag-mbti">TYPE</span></td>
          <td>
            <div class="star-row">
              <span class="sb sb-p1">SHENSHA_1</span>
              <span class="sb sb-gray">SHENSHA_2</span>
              <span class="sb sb-p3">SHENSHA_3</span>
            </div>
          </td>
          <td style="font-size:12.5px;color:var(--ink-soft);">FAMILY_ROLE_LINE1<br>FAMILY_ROLE_LINE2</td>
        </tr>
        <!-- repeat for each member -->
      </tbody>
    </table>
  </div>

  <!-- Top 3 surprising family discoveries -->
  <div class="callout">
    <strong>最惊人的家族发现：</strong>① DISCOVERY_1 ② DISCOVERY_2 ③ DISCOVERY_3
  </div>

  <!-- Five Elements Chain -->
  <div class="family-map">
    <div style="text-align:center;margin-bottom:20px;font-size:11px;letter-spacing:0.15em;color:var(--accent-mid);font-weight:500;">家族五行生生之链</div>
    <div class="chain">
      <div class="chain-node cn-ELEMENT_CLASS">
        <div class="cn-label">ROLE</div>
        <div class="cn-main">NAME</div>
        <div class="cn-sub" style="color:MEMBER_COLOR;">DAYMASTER · METAPHOR</div>
      </div>
      <div class="chain-arrow">RELATIONSHIP_LABEL<br>↓</div>
      <!-- repeat nodes + arrows for all members -->
    </div>
    <div style="text-align:center;margin-top:14px;font-size:11.5px;color:var(--ink-muted);line-height:1.85;">
      CHAIN_DESCRIPTION_1BR<br>
      <span style="color:var(--accent-mid);">CHAIN_INSIGHT</span>
    </div>
  </div>
</div>
```

---

## Section 贰 — N人个案深度画像

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">贰</div>
    <div class="section-title">N人个案深度画像</div>
    <div class="section-line"></div>
  </div>

  <!-- Use person-grid-3 for ≤3 members; person-grid-2 for 4+ members -->
  <div class="person-grid-3">

    <div class="person-card">
      <div class="person-header">
        <div class="person-avatar" style="background:MEMBER_FAINT;color:MEMBER_COLOR;">首字</div>
        <div class="person-meta">
          <div class="person-name-zh">NAME</div>
          <div class="person-name-en">ROLE · TYPE · DAYMASTER日主</div>
          <div class="person-tags">
            <span class="tag tag-bazi">PATTERN格</span>
            <span class="tag tag-mbti">TYPE</span>
            <span class="tag" style="background:var(--paper-deep);color:var(--ink-soft);">STRENGTH_LABEL</span>
          </div>
        </div>
      </div>
      <div class="person-body">
        <!-- 4 trait rows: 核心/天赋/[key_神煞]/弱点 -->
        <div class="trait-row">
          <div class="trait-label">核心</div>
          <div class="trait-value">CORE_DESCRIPTION — 8–12 char vivid summary</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">天赋</div>
          <div class="trait-value">GIFT_DESCRIPTION</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">KEY_SHENSHA</div>
          <div class="trait-value">SHENSHA_MEANING_FOR_THIS_PERSON</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">弱点</div>
          <div class="trait-value">SHADOW_TRAIT</div>
        </div>
        <!-- Strength bars: 4 custom dimensions -->
        <div style="margin-top:10px;">
          <div style="font-size:10.5px;color:var(--ink-muted);margin-bottom:5px;">能量维度</div>
          <div class="strength-row">
            <div class="strength-label">DIMENSION_1</div>
            <div class="strength-track"><div class="strength-fill" style="width:PCT%;background:MEMBER_MID_COLOR;"></div></div>
            <div class="strength-val">PCT</div>
          </div>
          <!-- 3 more strength rows -->
        </div>
        <div class="person-quote" style="border-left-color:MEMBER_MID_COLOR;">POETIC_ONE_LINER_QUOTE</div>
      </div>
    </div>

    <!-- repeat person-card for each member -->
  </div>
</div>
```

---

## Section 叁 — 伴侣关系 (couple only)

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">叁</div>
    <div class="section-title">伴侣关系：PERSON_A × PERSON_B</div>
    <div class="section-line"></div>
  </div>

  <div class="rel-card">
    <div class="rel-header">
      <div class="rel-icon" style="background:PERSON_A_FAINT;color:PERSON_A_COLOR;">伴侣</div>
      <div class="rel-title-block">
        <div class="rel-title">ELEMENT_A × ELEMENT_B · TYPE_A × TYPE_B</div>
        <div class="rel-subtitle">ELEMENT_RELATIONSHIP · MBTI_RELATIONSHIP_LABEL</div>
      </div>
      <div style="text-align:center;">
        <div class="rel-score">SCORE</div>
        <div class="rel-score-label">合盘指数 /100</div>
      </div>
    </div>
    <div class="rel-body">
      <div class="rel-cols">
        <!-- Left: 3 insight blocks — 五行命理, shared神煞, MBTI analysis -->
        <div>
          <div class="insight-block">
            <div class="insight-head">五行命理</div>
            <div class="insight-text">ELEMENT_RELATIONSHIP_ANALYSIS — how one element affects the other, who receives/gives energy</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">命格共鸣</div>
            <div class="insight-text">SHARED_SHENSHA_OR_SPECIAL_CONNECTION</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">TYPE_A × TYPE_B</div>
            <div class="insight-text">MBTI_COMPATIBILITY_ANALYSIS — cognitive functions, what they share vs complement</div>
          </div>
        </div>
        <!-- Right: 3 insight blocks — what each gives the other -->
        <div>
          <div class="insight-block">
            <div class="insight-head">最深的契合</div>
            <div class="insight-text">DEEPEST_COMPATIBILITY_POINT</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">PERSON_B给PERSON_A的</div>
            <div class="insight-text">WHAT_B_GIVES_A</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">PERSON_A给PERSON_B的</div>
            <div class="insight-text">WHAT_A_GIVES_B</div>
          </div>
        </div>
      </div>

      <!-- Friction + Solution boxes -->
      <div class="rel-cols" style="margin-top:4px;">
        <div>
          <div class="friction-box">
            <div class="friction-title">⚡ 最大的挑战</div>
            <div class="friction-text">
              <strong>CHALLENGE_LABEL_1：</strong>CHALLENGE_DESCRIPTION_1<br><br>
              <strong>CHALLENGE_LABEL_2：</strong>CHALLENGE_DESCRIPTION_2
            </div>
          </div>
        </div>
        <div>
          <div class="solution-box">
            <div class="solution-title">✦ 最佳相处模式</div>
            <div class="solution-text">
              <strong>PERSON_A需要：</strong>ACTIONABLE_ADVICE_A<br><br>
              <strong>PERSON_B需要：</strong>ACTIONABLE_ADVICE_B
            </div>
          </div>
        </div>
      </div>

      <div class="callout" style="margin-top:16px;">
        <strong>这段关系最珍贵的地方：</strong>PRECIOUS_INSIGHT — the single most remarkable thing about this pairing, naming specific astrological/type elements.
      </div>
    </div>
  </div>
</div>
```

---

## Section 肆 — 亲子关系

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">肆</div>
    <div class="section-title">亲子关系深度分析</div>
    <div class="section-line"></div>
  </div>

  <!-- One rel-card per parent-child pair -->
  <div class="rel-card">
    <div class="rel-header">
      <div class="rel-icon" style="background:PARENT_FAINT;color:PARENT_COLOR;font-size:12px;">父子</div>
      <!-- or 父女/母子/母女 -->
      <div class="rel-title-block">
        <div class="rel-title">PARENT × CHILD · TYPE_P父/母 × TYPE_C子/女</div>
        <div class="rel-subtitle">ELEMENT_P × ELEMENT_C · ELEMENT_RELATIONSHIP_LABEL</div>
      </div>
      <div style="text-align:center;">
        <div class="rel-score">SCORE</div>
        <div class="rel-score-label">命理天定 /100</div>
      </div>
    </div>
    <div class="rel-body">
      <div class="rel-cols">
        <!-- Left: key astrological connections + MBTI pair analysis -->
        <div>
          <div class="insight-block">
            <div class="insight-head">最惊人的命理发现</div>
            <div class="insight-text">MOST_STRIKING_CONNECTION — name exact pillars, stars, or elements</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">ELEMENT_RELATIONSHIP的亲子能量</div>
            <div class="insight-text">ELEMENT_DYNAMIC_ANALYSIS</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">TYPE_P × TYPE_C 的奇妙配对</div>
            <div class="insight-text">MBTI_PARENT_CHILD_DYNAMIC</div>
          </div>
        </div>
        <!-- Right: special pattern + what this means for parenting -->
        <div>
          <div class="insight-block">
            <div class="insight-head">CHILD'S_KEY_SHENSHA的教养含义</div>
            <div class="insight-text">HOW_PARENT_CAN_ACTIVATE_OR_SUPPORT</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">CHILD'S_PATTERN格的需求</div>
            <div class="insight-text">WHAT_THIS_PATTERN_NEEDS_FROM_PARENT</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">SPECIAL_PILLAR_CONNECTION</div>
            <div class="insight-text">IF_ANY_SPECIAL_CONNECTION_EXISTS</div>
          </div>
        </div>
      </div>

      <div class="rel-cols" style="margin-top:4px;">
        <div>
          <div class="friction-box">
            <div class="friction-title">⚡ 父/母子最大摩擦</div>
            <div class="friction-text">
              <strong>FRICTION_1：</strong>DESCRIPTION_1<br><br>
              <strong>FRICTION_2：</strong>DESCRIPTION_2
            </div>
          </div>
        </div>
        <div>
          <div class="solution-box">
            <div class="solution-title">✦ 最有效的教养方式</div>
            <div class="solution-text">
              <strong>STRATEGY_1：</strong>CONCRETE_PARENTING_ADVICE_1<br><br>
              <strong>STRATEGY_2：</strong>CONCRETE_PARENTING_ADVICE_2
            </div>
          </div>
        </div>
      </div>

      <div class="callout" style="margin-top:14px;">
        <strong>给PARENT_NAME的核心提醒：</strong>SINGLE_MOST_IMPORTANT_PARENTING_INSIGHT — specific to this child's type and chart.
      </div>
    </div>
  </div>

  <!-- add more rel-cards for additional parent-child pairs -->
</div>
```

---

## Section 伍/陆 — 家庭整体动态与核心建议

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">伍</div><!-- or 陆 if siblings section exists -->
    <div class="section-title">家庭整体动态与核心建议</div>
    <div class="section-line"></div>
  </div>

  <div class="two-col" style="margin-bottom:18px;">
    <div class="summary-box">
      <div class="summary-eyebrow">N人MBTI家庭生态</div>
      <div class="summary-text">
        MBTI_ECOSYSTEM_ANALYSIS — I/E balance, N/S gap, J/P distribution, what's strong collectively, what's missing collectively. Name specific types. End with the family's collective superpower.
      </div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">家庭最大的整体挑战</div>
      <div class="summary-text">
        COLLECTIVE_CHALLENGE — the one thing ALL members share as a blind spot (e.g., no S types, all introverts, missing practical execution). Name it and suggest the workaround.
      </div>
    </div>
  </div>

  <!-- Relationship summary table -->
  <div class="table-wrap">
    <table class="overview-table">
      <thead>
        <tr>
          <th>关系</th>
          <th>命理核心优势</th>
          <th>最需要做的一件事</th>
          <th>合盘</th>
        </tr>
      </thead>
      <tbody>
        <!-- one row per pair -->
        <tr>
          <td>
            <span style="font-weight:500;color:PERSON_A_COLOR;">PERSON_A × PERSON_B</span><br>
            <span style="font-size:11px;color:var(--ink-muted);">关系类型</span>
          </td>
          <td style="font-size:12.5px;">CORE_ADVANTAGE</td>
          <td style="font-size:12.5px;">MOST_IMPORTANT_ACTION</td>
          <td>
            <span style="font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--accent-mid);">SCORE</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 1–2 specific family patterns -->
  <div class="two-col" style="margin-top:18px;">
    <div class="summary-box">
      <div class="summary-eyebrow">PATTERN_1_LABEL (e.g. 驿马的家庭意义)</div>
      <div class="summary-text">PATTERN_1_ANALYSIS</div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">PATTERN_2_LABEL (e.g. 华盖密度分析)</div>
      <div class="summary-text">PATTERN_2_ANALYSIS</div>
    </div>
  </div>
</div>
```

---

## Section 陆/柒 — N人一句话命格总结

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">陆</div><!-- or 柒 -->
    <div class="section-title">N人一句话命格总结</div>
    <div class="section-line"></div>
  </div>

  <!-- One quote-card per member -->
  <div class="quote-card">
    <div class="qc-bar" style="background:MEMBER_MID_COLOR;"></div>
    <div>
      <div class="qc-name" style="color:MEMBER_COLOR;">NAME · TYPE · DAYMASTER元素</div>
      <div class="qc-text">
        POETIC_SUMMARY — 3–5 sentences. Structure:
        1) Nature metaphor grounded in their element (e.g., "他是一片壬水大海")
        2) Their two greatest superpowers (name specific 神煞 or MBTI function)
        3) Their core vulnerability
        4) Their unique role in THIS family's ecosystem
        (End with emoji matching their element/metaphor)
      </div>
    </div>
  </div>

  <!-- repeat for each member -->
</div>
```

---

## Poem Closing

```html
<div class="poem-section">
  <div class="ornament" style="margin-bottom:32px;justify-content:center;">
    <div class="ornament-line" style="max-width:120px;"></div>
    <div class="ornament-dia">◆</div>
    <div class="ornament-line r" style="max-width:120px;"></div>
  </div>
  <div class="poem-text">
    <!-- One line per person, using their element metaphor -->
    DAYMASTER_ELEMENT_A为METAPHOR_A，NATURE_LINE_A<br>
    DAYMASTER_ELEMENT_B为METAPHOR_B，NATURE_LINE_B<br>
    DAYMASTER_ELEMENT_C为METAPHOR_C，NATURE_LINE_C<br>
    <br>
    <!-- How they relate: the generating chain -->
    ELEMENT_RELATIONSHIP_A，ELEMENT_RELATIONSHIP_B<br>
    N种生命，一个家<br>
    <br>
    <span style="font-size:13px;color:var(--ink-faint);">
      <!-- Prose lines on the family's collective story -->
      PERSON_A用GIFT_A，PERSON_B用GIFT_B<br>
      PERSON_C用GIFT_C把这一切变成现实<br>
      这个家的故事，才刚刚开始。
    </span>
  </div>
  <div class="poem-source">FAMILY_NAME家族 · 八字 × MBTI 家族分析报告 · YEAR</div>
</div>
```

---

## Section 贰 — 家族命盘十神 · 神煞全景

Multi-column table: leftmost column = labels, then one column per family member. Use each member's assigned color for their column header. Column header shows name, family role (爸爸/妈妈/儿子/女儿), Day Master, and MBTI.

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">贰</div>
    <div class="section-title">家族命盘十神 · 神煞全景</div>
    <div class="section-line"></div>
  </div>

  <!-- ══ Part 0: 命盘总览一览表 ══ -->
  <!-- 材质感 lookup: 甲木→参天大树 乙木→藤萝花草 丙火→骄阳烈日 丁火→烛光星火 戊土→巍峨山岳 己土→田园沃土 庚金→刀剑矿铁 辛金→珠玉精金 壬水→江河奔流 癸水→雨露灵泉 -->
  <!-- 日主强度 pill styles: 身强→color:#1a6b3a;bg:rgba(26,107,58,0.08) | 身弱/偏弱→color:#a07820;bg:rgba(160,120,20,0.08) | 极弱→color:#c04030;bg:rgba(180,50,40,0.08) -->
  <div style="overflow-x:auto;border-radius:10px;border:0.5px solid rgba(0,0,0,0.1);margin-bottom:28px">
  <table style="width:100%;border-collapse:collapse;min-width:560px">
    <thead>
      <tr style="border-bottom:1.5px solid rgba(0,0,0,0.12)">
        <th style="padding:10px 14px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">人</th>
        <th style="padding:10px 10px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">日主</th>
        <th style="padding:10px 10px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">五行阴阳</th>
        <th style="padding:10px 10px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">用的格局</th>
        <th style="padding:10px 10px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">日主强度</th>
        <th style="padding:10px 10px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">材质感</th>
        <th style="padding:10px 14px;text-align:left;font-size:10px;font-family:'DM Mono',monospace;letter-spacing:0.1em;color:var(--ink-muted);font-weight:400;background:rgba(0,0,0,0.025)">核心关键词</th>
      </tr>
    </thead>
    <tbody>
      <!-- One row per family member — repeat the tr block for each person -->
      <tr style="border-bottom:0.5px solid rgba(0,0,0,0.07)">
        <td style="padding:14px 14px;font-family:'Noto Serif SC',serif;font-size:14px;font-weight:500;color:MEMBER_COLOR;white-space:nowrap">MEMBER_NAME<div style="font-size:10px;color:var(--ink-muted);font-weight:400;margin-top:1px">MEMBER_ROLE <!-- 爸爸/妈妈/儿子/女儿 --></div></td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft);white-space:nowrap">DAYMASTER_CHAR日主</td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft);white-space:nowrap">YIN_YANG_ELEMENT <!-- e.g. 阳水 --></td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft)">PATTERN_NAME <!-- e.g. 七杀格 --></td>
        <td style="padding:14px 10px;white-space:nowrap">
          <span style="font-size:12px;padding:2px 10px;border-radius:20px;color:STRENGTH_COLOR;background:STRENGTH_BG">STRENGTH_LABEL</span>
        </td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-muted);white-space:nowrap">MATERIAL_METAPHOR <!-- e.g. 藤萝花草 --></td>
        <td style="padding:14px 14px;font-size:12.5px;color:var(--ink-soft)">KW1、KW2、KW3、KW4</td>
      </tr>
      <!-- repeat tr for each additional member -->
    </tbody>
  </table>
  </div>

  <!-- ══ Part A: 十神分析 · 命盘骨架结构 ══ -->
  <div style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.18em;color:var(--ink-muted);margin-bottom:12px">
    01 · 十神分析 · 命盘骨架结构 · 以各自日主为基准
  </div>

  <!-- Legend -->
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;padding:10px 14px;background:rgba(0,0,0,0.03);border-radius:8px;border:0.5px solid rgba(0,0,0,0.08)">
    <span style="font-size:10px;color:var(--ink-muted);font-family:'DM Mono',monospace;margin-right:2px">十神：</span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--ink-soft)"><span style="width:8px;height:8px;border-radius:2px;background:#807898;display:inline-block"></span>比肩·劫财（同类）</span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--ink-soft)"><span style="width:8px;height:8px;border-radius:2px;background:#887020;display:inline-block"></span>食神·伤官（我生）</span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--ink-soft)"><span style="width:8px;height:8px;border-radius:2px;background:#207848;display:inline-block"></span>偏财·正财（我克）</span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--ink-soft)"><span style="width:8px;height:8px;border-radius:2px;background:#3050a0;display:inline-block"></span>七杀·正官（克我）</span>
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:10.5px;color:var(--ink-soft)"><span style="width:8px;height:8px;border-radius:2px;background:#6030a0;display:inline-block"></span>偏印·正印（生我）</span>
  </div>

  <!-- Ten Gods Table -->
  <div style="overflow-x:auto;border-radius:10px;border:0.5px solid rgba(0,0,0,0.1);margin-bottom:8px">
  <table style="width:100%;border-collapse:collapse;min-width:480px">
    <thead>
      <tr>
        <th style="padding:10px 12px;text-align:left;font-size:9.5px;font-family:'DM Mono',monospace;letter-spacing:0.12em;color:var(--ink-muted);background:rgba(0,0,0,0.04);border-bottom:1px solid rgba(0,0,0,0.1);border-right:0.5px solid rgba(0,0,0,0.08);width:90px">十神 / 家庭成员</th>
        <!-- One th per family member — repeat as needed: -->
        <th style="padding:10px 8px;text-align:center;background:rgba(MEMBER1_RGB,0.06);border-bottom:1px solid rgba(0,0,0,0.1);min-width:110px">
          <div style="font-family:'Noto Serif SC',serif;font-size:13px;font-weight:500;color:MEMBER1_COLOR;margin-bottom:2px">MEMBER1_NAME</div>
          <div style="font-size:9.5px;color:var(--ink-muted)">MEMBER1_ROLE</div>
          <div style="font-size:9.5px;font-family:'DM Mono',monospace;color:MEMBER1_COLOR;opacity:0.7">DAYMASTER1·MBTI1</div>
        </th>
        <!-- repeat for each additional member -->
      </tr>
    </thead>
    <tbody>
      <!-- Rows: 年干 | 年支 | 月干 | 月支 | 日干(日主,gold) | 日支 | 时干 | 时支 | 格局 | 日主强弱 -->
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.025);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);white-space:nowrap;font-family:'DM Mono',monospace">年干</td>
        <td style="padding:6px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <div style="display:inline-flex;flex-direction:column;align-items:center;gap:1px;padding:4px 10px;border-radius:6px;border:0.5px solid TG_COLOR40;background:TG_BG;min-width:48px">
            <span style="font-family:'Noto Serif SC',serif;font-size:16px;font-weight:500;color:TG_COLOR">STEM</span>
            <span style="font-size:9px;color:TG_COLOR;opacity:0.85">TG_NAME</span>
          </div>
        </td>
        <!-- repeat cell for each additional member -->
      </tr>
      <!-- 年支 | 月干 | 月支 rows — same pattern -->
      <!-- 日干 row — gold 日主 for all -->
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:#a07820;background:rgba(180,140,20,0.05);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);font-family:'DM Mono',monospace">日干</td>
        <td style="padding:6px 5px;text-align:center;background:rgba(180,140,20,0.04);border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <div style="display:inline-flex;flex-direction:column;align-items:center;gap:1px;padding:4px 10px;border-radius:6px;border:0.5px solid rgba(180,140,20,0.4);background:rgba(180,140,20,0.1);min-width:48px">
            <span style="font-family:'Noto Serif SC',serif;font-size:16px;font-weight:500;color:#a07820">DAYMASTER</span>
            <span style="font-size:9px;color:#a07820;opacity:0.9">日主</span>
          </div>
        </td>
        <!-- repeat -->
      </tr>
      <!-- 日支 | 时干 | 时支 rows — same as 年干 pattern -->
      <!-- 格局 row -->
      <tr style="background:rgba(180,140,20,0.03)">
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:#a07820;background:rgba(180,140,20,0.06);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);font-family:'DM Mono',monospace">格局</td>
        <td style="padding:6px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <span style="display:inline-block;padding:3px 10px;border-radius:6px;font-size:11px;background:rgba(160,120,20,0.1);border:0.5px solid rgba(180,140,20,0.3);color:#a07820">PATTERN_NAME</span>
        </td>
        <!-- repeat -->
      </tr>
      <!-- 日主强弱 row -->
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.025);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);font-family:'DM Mono',monospace">日主强弱</td>
        <td style="padding:6px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <span style="display:inline-block;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:500;color:STRENGTH_COLOR;background:STRENGTH_BG">STRENGTH_LABEL</span>
        </td>
        <!-- 身强 → color:#1a6b3a;bg:rgba(26,107,58,0.08) | 身弱 → color:#a07820;bg:rgba(160,120,20,0.08) | 极弱 → color:#c04030;bg:rgba(180,50,40,0.08) -->
      </tr>
    </tbody>
  </table>
  </div>

  <!-- Ten Gods Insight Cards — one per family member, describing their family-role 十神 pattern -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:10px;margin-bottom:32px">
    <div style="background:rgba(MEMBER1_RGB,0.05);border:0.5px solid rgba(MEMBER1_RGB,0.2);border-radius:10px;padding:14px">
      <div style="font-family:'Noto Serif SC',serif;font-size:13px;color:MEMBER1_COLOR;margin-bottom:6px;font-weight:500">MEMBER1_NAME · ROLE1 · DAYMASTER1</div>
      <div style="font-size:11.5px;color:var(--ink-soft);line-height:1.7">DOMINANT_TG_PATTERN_FAMILY_MEANING — e.g., "官印格：以规则和期望来表达关爱，是家庭的标准制定者，孩子与其相处需要清晰的边界和直接的反馈。"</div>
    </div>
    <!-- repeat for each member -->
  </div>

  <!-- ══ Part B: 神煞对照 · 特殊天赋加成 ══ -->
  <div style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.18em;color:var(--ink-muted);margin-bottom:12px">
    02 · 神煞对照 · 特殊天赋加成 · 四类分析
  </div>

  <!-- Legend -->
  <div style="display:flex;gap:16px;margin-bottom:12px;flex-wrap:wrap;align-items:center;font-size:11px;color:var(--ink-soft)">
    <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:2px;background:rgba(42,128,80,0.4)"></div>有（单现）</div>
    <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:2px;background:rgba(160,120,20,0.5)"></div>双现/多现</div>
    <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:2px;background:rgba(180,50,40,0.4)"></div>凶煞/注意</div>
    <div style="display:flex;align-items:center;gap:6px"><div style="width:10px;height:10px;border-radius:2px;background:rgba(0,0,0,0.06);border:0.5px solid rgba(0,0,0,0.12)"></div>无</div>
  </div>

  <div style="overflow-x:auto;border-radius:10px;border:0.5px solid rgba(0,0,0,0.1);margin-bottom:20px">
  <table style="width:100%;border-collapse:collapse;min-width:480px">
    <thead>
      <tr>
        <th style="padding:10px 12px;text-align:left;font-size:9.5px;font-family:'DM Mono',monospace;letter-spacing:0.12em;color:var(--ink-muted);background:rgba(0,0,0,0.04);border-bottom:1px solid rgba(0,0,0,0.1);border-right:0.5px solid rgba(0,0,0,0.08);width:130px">神煞 / 家庭成员</th>
        <th style="padding:10px 8px;text-align:center;background:rgba(MEMBER1_RGB,0.06);border-bottom:1px solid rgba(0,0,0,0.1)">
          <div style="font-size:13px;font-weight:500;color:MEMBER1_COLOR;font-family:'Noto Serif SC',serif">MEMBER1_NAME</div>
          <div style="font-size:9px;color:var(--ink-muted)">MEMBER1_ROLE</div>
        </th>
        <!-- repeat th for each member -->
      </tr>
    </thead>
    <tbody>
      <!-- ═══ 命格类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">命格类 · CHARACTER STARS</td></tr>
      <!-- Rows: 魁罡 | 将星 | 华盖 | 驿马 | 阴阳差错 -->
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">魁罡<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Iron Will</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">将星<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Command</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">华盖<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Creative</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">驿马<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Travel</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">阴阳差错<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Misalign</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ 贵人类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">贵人类 · NOBILITY STARS</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">文昌<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Literary</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">天乙贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Noble</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">国印贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">State Seal</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">太极贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Supreme</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ 人缘类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">人缘类 · SOCIAL STARS</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">桃花<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Charisma</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ 凶煞类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">凶煞类 · CHALLENGING STARS</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">羊刃<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Sword</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">孤辰/寡宿<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Solitude</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">天罗地网<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Trapped</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">劫煞/亡神<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Loss</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ Total Count Row ═══ -->
      <tr style="background:rgba(0,0,0,0.03)">
        <td style="padding:12px 12px;font-size:10.5px;color:#a07820;font-family:'DM Mono',monospace;font-weight:500;letter-spacing:0.06em">综合神煞统计</td>
        <td style="padding:10px 5px;text-align:center">
          <div style="font-family:'DM Mono',monospace;font-size:22px;color:#a07820;line-height:1">TOTAL_COUNT</div>
          <div style="font-size:9px;color:var(--ink-muted);margin-top:2px">项神煞</div>
        </td>
        <!-- repeat for each member -->
      </tr>

    </tbody>
  </table>
  </div>

  <!-- ══ Part C: 魁罡·将星·华盖·驿马 家庭关系动态 ══ -->
  <div style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.18em;color:var(--ink-muted);margin-bottom:14px">
    03 · 魁罡 · 将星 · 华盖 · 驿马 — 家庭权威 · 沟通 · 创意 · 流动 动态
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">

    <!-- 将星: family authority & autonomy -->
    <div style="background:rgba(48,80,160,0.05);border:0.5px solid rgba(48,80,160,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(48,80,160,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#3050a0;font-weight:500">将星</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(48,80,160,0.6)">权威 · 领域自主 · Command</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>谁有将星：</strong>JIANGXING_FAMILY_HOLDERS<br>
        <!-- Parent only: "父母方持将星，是家庭天然的权威中心。对无将星的孩子：充分的结构和规则感会让其有安全感；对有将星的孩子：需要在家庭内创造其可以「做主」的专属领域，避免一刀切管控。" -->
        <!-- Child has 将星: "CHILD_NAME有将星，天生有主见和领导欲——强压式教育会引发强烈反弹。建议父母在「家庭议事」中给其真实的发言权和小范围决策权（如假期计划、房间装饰、课外活动选择），将星能量得到尊重后，服从大框架会更自然。" -->
        <!-- Both parent and child: "家庭中将星共存：权威与自主的张力是这个家庭的核心动态。解法不是减少一方的力量，而是划分领域——父母的权威在价值观和大方向，孩子的将星在个人成长路径上。" -->
        JIANGXING_FAMILY_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#3050a0;background:rgba(48,80,160,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>亲子/伴侣建议：</strong>JIANGXING_PARENTING_OR_COUPLE_PROTOCOL
      </div>
    </div>

    <!-- 魁罡: willpower & communication style -->
    <div style="background:rgba(120,80,20,0.05);border:0.5px solid rgba(140,100,20,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(140,100,20,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#8b5c14;font-weight:500">魁罡</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(140,100,20,0.6)">意志 · 沟通方式 · Iron Will</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>谁是魁罡：</strong>KUIGANG_FAMILY_HOLDERS<br>
        <!-- Parent: "NAME是魁罡命，沟通风格直接果决——情感型诉求（「你不关心我」）对其效果差，直接说明需求和预期更有效。孩子与魁罡父母沟通时，建议用「我想要X，因为Y」的格式，而非抱怨。" -->
        <!-- Child: "CHILD_NAME是魁罡小孩：意志力强，哭闹或情绪施压不是其本意而是能量出口。建议：给予高度明确的规则（魁罡喜欢清晰边界），减少「你必须」的命令式语言，改用选择题（「你选A还是B」）。" -->
        <!-- Multiple: "家庭多魁罡：家庭冲突烈度高但恢复快，每个人都是「讲道理但不接受控制」型。最有效的家庭沟通机制：家庭会议制度（定期坐下来讲清楚），而非日常随机争执。" -->
        KUIGANG_FAMILY_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#8b5c14;background:rgba(140,100,20,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>有效沟通方式：</strong>KUIGANG_COMMUNICATION_STYLE
      </div>
    </div>

    <!-- 华盖: creative frequency & encouragement style -->
    <div style="background:rgba(80,40,140,0.05);border:0.5px solid rgba(100,50,160,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(100,50,160,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#6030a0;font-weight:500">华盖</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(100,50,160,0.6)">创意 · 独特性 · Creative Depth</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>华盖分布：</strong>HUAGAI_FAMILY_DENSITY<br>
        <!-- Family with dense 华盖: "这是一个「少数派灵魂」家庭——大概率有不走寻常路的家庭美学和价值观。家庭成员对彼此的特立独行天然包容，但可能集体在社交场合感到「与主流格格不入」，这是天赋不是缺陷。" -->
        <!-- 华盖 child in non-华盖 family: "CHILD_NAME有华盖，是家庭里的「创意异类」——其思维、喜好和审美可能让父母感到陌生甚至困惑。建议：不要用「正常标准」来评判其选择，给予充分的创意空间（独立房间、个人项目），华盖的灵性/艺术能量需要独处来充电。" -->
        <!-- Shared 华盖 between couple: "夫妻双方都有华盖，共享一种独特的精神美学——这是伴侣间非常罕见的深层共鸣。家庭氛围通常富有创造力和深度，需要注意不要让「灵性/艺术追求」凌驾于家庭实际需要（财务、孩子教育规划）之上。" -->
        HUAGAI_FAMILY_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#6030a0;background:rgba(100,50,160,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>教育/家庭氛围建议：</strong>HUAGAI_FAMILY_ENCOURAGEMENT
      </div>
    </div>

    <!-- 驿马: mobility, belonging & stability -->
    <div style="background:rgba(20,80,50,0.05);border:0.5px solid rgba(30,100,60,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(30,100,60,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#1a6038;font-weight:500">驿马</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(30,100,60,0.6)">流动 · 归属感 · Mobility</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>游走者 vs 锚点：</strong>YIMA_FAMILY_MOVERS_ANCHORS<br>
        <!-- Parent has 驿马: "NAME（父/母）有驿马，职业或生活方式天然带有流动性——频繁出行、异地工作或跨国背景可能是家庭常态。对孩子：父母的「在路上」状态是宝贵的全球视野来源，建议让孩子参与父母的旅行经历；同时需要建立稳定的家庭仪式（每周家庭时间）来补偿物理流动带来的疏离感。" -->
        <!-- Child has 驿马: "CHILD_NAME有驿马，天生是「想飞走」的孩子——过度的约束会产生强烈的逃离冲动，而适度的「放飞」（游学、营地、独立旅行）会带来归属感的提升而非减少。建议：制定「最小化约束」的家庭规则，给予自由的同时维持核心价值观框架。" -->
        <!-- No 驿马 in family: "全家无驿马，这是一个高度稳定、根植于当地的家庭。强项是深厚的本地关系网络和稳定感；在全球化机会面前可能需要刻意突破舒适圈，建议将国际化体验作为家庭共同项目来推进。" -->
        YIMA_FAMILY_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#1a6038;background:rgba(30,100,60,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>家庭流动与归属建议：</strong>YIMA_BELONGING_STRATEGY
      </div>
    </div>

  </div>

  <!-- Synthesis Callout -->
  <div class="callout">
    <strong>家族命盘星盘综合：</strong>FAMILY_SHENSHEN_SYNTHESIS — 2–3 sentences: (1) What makes this family's 神煞 constellation unique as a group (e.g., "这是一个双魁罡父母+华盖孩子的高张力创意家庭"); (2) The most important cross-member dynamic revealed by the four key stars; (3) The single most actionable insight for this family's communication or parenting approach.
  </div>
</div>
```
