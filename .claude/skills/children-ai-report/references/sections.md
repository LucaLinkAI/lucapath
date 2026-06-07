# HTML Section Skeletons — Children AI Report

Replace ALL_CAPS placeholders with generated content. Preserve every class and pattern exactly.

---

## Full Document Wrapper

```html
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI时代如何培养 CHILD_NAME(S)</title>
[GOOGLE_FONTS_LINK]
<style>
[CHOSEN_ROOT_VARS]
[FULL_CSS]
</style>
</head>
<body>
<div class="page">

[PARENT_HEADER — if multi-child and parents provided]
[CHILD_BLOCK(S)]

</div>
</body>
</html>
```

---

## Parent Header (multi-child only)

```html
<div class="parent-header">
  <div>
    <div class="parent-label">家长视角</div>
    <div class="parent-title">PARENT_A × PARENT_B 如何在AI时代培养孩子们</div>
    <div class="parent-chips">
      <span class="pchip" style="background:rgba(160,40,60,0.25);border-color:rgba(200,60,80,0.35);color:#e08090;">PARENT_A · TYPE_A · DAYMASTER_A → PARENT_A在AI时代对孩子的角色</span>
      <span class="pchip" style="background:rgba(44,80,140,0.3);border-color:rgba(80,120,200,0.4);color:#80a0e8;">PARENT_B · TYPE_B · DAYMASTER_B → PARENT_B在AI时代对孩子的角色</span>
    </div>
  </div>
  <div class="parent-quote">
    <strong>核心理念：</strong>不是把孩子培养成"会用AI工具的人"，而是培养成<strong>「AI时代不可替代的人」</strong>。<br>
    CHILD_1的IRREPLACEABLE_CORE_1 + CHILD_2的IRREPLACEABLE_CORE_2，正是AI永远无法真正拥有的能力。
  </div>
</div>
```

---

## Single Child — Full Block

```html
<!-- HEADER -->
<div class="header">
  <div class="header-top">
    <div class="ai-badge">AI</div>
    <div class="header-titles">
      <div class="title-main">AI时代，如何培养 <span class="highlight">CHILD_NAME</span></div>
      <div class="title-sub">MBTI_TYPE × BAZI_PATTERN × NATURE_METAPHOR</div>
    </div>
  </div>
  <div class="header-chips">
    <span class="chip chip-mbti">MBTI_TYPE · MBTI_EN_ARCHETYPE</span>
    <span class="chip chip-bazi">PATTERN格 · KEY_SHENSHA · DAYMASTER日主</span>
    <span class="chip chip-astro">SUN_SIGN · RISING_SIGN上升 · NOTABLE_PLANET</span>
    <span class="chip chip-astro">HOBBY_1 · HOBBY_2</span>
  </div>
  <div class="header-quote">
    OPENING_ARGUMENT — 2 sentences: what AI cannot do that this child naturally is. End with the core archetype.
    <strong>「CHILD_ARCHETYPE + AI_ROLE」</strong>——这种组合在未来的现实世界里，势不可挡。
  </div>
</div>
```

---

## Multi-Child Block Header

```html
<div class="block block-CHILD_ID" style="background:var(--bg);">
  <div class="block-header">
    <div class="block-header-inner">
      <div class="block-badge">首字</div>
      <div>
        <div class="block-name">CHILD_NAME</div>
        <div class="block-sub">MBTI_TYPE × BAZI_PATTERN × DAYMASTER日主 × HOBBY</div>
        <div class="block-chips">
          <span class="bchip bchip-a">MBTI_TYPE · MBTI_ARCHETYPE</span>
          <span class="bchip bchip-b">KEY_SHENSHA_1</span>
          <span class="bchip bchip-b">KEY_SHENSHA_2</span>
          <span class="bchip bchip-c">SUN_SIGN · RISING_SIGN上升</span>
        </div>
      </div>
    </div>
  </div>
  <div class="block-divider"></div>
  [REST OF CHILD SECTIONS]
</div>
```

---

## Section: 四维天赋全景

```html
<div class="section-label">
  <div class="sl-line"></div>
  <div class="sl-text">四维天赋全景 · 命理 × 心理 × 星盘 × 兴趣</div>
  <div class="sl-line r"></div>
</div>

<div class="overview-grid">

  <!-- BaZi Card -->
  <div class="ov-card ov-bazi">
    <div class="ov-head"><div class="ov-icon">☯</div><div class="ov-title">八字命理 · BaZi</div></div>
    <div class="ov-body">
      <strong>日主：DAYMASTER(ELEMENT)</strong> · PATTERN格 · STRENGTH（身强/弱）<br>
      BAZI_CORE_INSIGHT — what the chart most powerfully says about this child's nature and path (2 sentences)
    </div>
    <div class="ov-tags">
      <span class="ov-tag ov-tag-bazi">PATTERN格</span>
      <span class="ov-tag ov-tag-bazi">KEY_SHENSHA</span>
      <span class="ov-tag ov-tag-bazi">STRENGTH</span>
    </div>
  </div>

  <!-- MBTI Card -->
  <div class="ov-card ov-mbti">
    <div class="ov-head"><div class="ov-icon">🧠</div><div class="ov-title">MBTI心理 · TYPE</div></div>
    <div class="ov-body">
      <strong>TYPE · MBTI_CN_ARCHETYPE</strong><br>
      主导功能：DOM_FUNCTION（FUNCTION_DESCRIPTION）<br>
      MBTI_CORE_INSIGHT — what this type is uniquely built for in the AI era (2 sentences)
    </div>
    <div class="ov-tags">
      <span class="ov-tag ov-tag-mbti">MBTI_STRENGTH_1</span>
      <span class="ov-tag ov-tag-mbti">MBTI_STRENGTH_2</span>
    </div>
  </div>

  <!-- Western Astrology Card -->
  <div class="ov-card ov-west">
    <div class="ov-head"><div class="ov-icon">🌌</div><div class="ov-title">西方星盘 · Western</div></div>
    <div class="ov-body">
      ☀️ <strong>SUN_SIGN</strong>（太阳）· ⬆️ <strong>RISING_SIGN</strong>（上升）· 🌙 <strong>MOON_SIGN</strong>（月亮）<br>
      WEST_CORE_INSIGHT — 2 standout planetary placements and what they mean for this child
    </div>
    <div class="ov-tags">
      <span class="ov-tag ov-tag-west">NOTABLE_PLACEMENT_1</span>
      <span class="ov-tag ov-tag-west">NOTABLE_PLACEMENT_2</span>
    </div>
  </div>

  <!-- Hobbies Card -->
  <div class="ov-card ov-hobby">
    <div class="ov-head"><div class="ov-icon">⚡</div><div class="ov-title">兴趣爱好 · 现实战场</div></div>
    <div class="ov-body">
      <strong>HOBBY_1 · HOBBY_2</strong><br>
      HOBBY_INSIGHT — how these specific hobbies build the irreplaceable skills that AI cannot acquire (2 sentences)
    </div>
    <div class="ov-tags">
      <span class="ov-tag ov-tag-hobby">HOBBY_AI_COUNTER_1</span>
      <span class="ov-tag ov-tag-hobby">HOBBY_AI_COUNTER_2</span>
    </div>
  </div>

</div>

<!-- Cross-system convergence box -->
<div class="convergence">
  <div class="conv-label">四维系统共同指向</div>
  <div class="conv-text">
    CONVERGENCE_INSIGHT — the single most striking point where all 4 systems agree. Name the specific signals: "<strong>BAZI_SIGNAL × MBTI_SIGNAL × WEST_SIGNAL × HOBBY</strong>——四重信号，同指CONVERGENT_GIFT。"
  </div>
</div>
```

---

## Section: 兴趣与命格的交叉点

```html
<div class="section-label">
  <div class="sl-line"></div>
  <div class="sl-text">兴趣与命格的交叉点 · 为什么他/她天生就该做这件事</div>
  <div class="sl-line r"></div>
</div>

<div class="interest-grid">
  <!-- One card per hobby/interest -->
  <div class="int-card">
    <div class="int-hobby">EMOJI HOBBY_NAME</div>
    <div class="int-system">命理连接</div>
    <div class="int-text">BAZI_CONNECTION — which specific 神煞, Day Master, or 格局 resonates with this hobby</div>
  </div>
  <div class="int-card">
    <div class="int-hobby">EMOJI HOBBY_NAME</div>
    <div class="int-system">MBTI连接</div>
    <div class="int-text">MBTI_CONNECTION — which cognitive function or type trait this hobby develops</div>
  </div>
  <div class="int-card">
    <div class="int-hobby">EMOJI HOBBY_NAME</div>
    <div class="int-system">星盘连接</div>
    <div class="int-text">ASTRO_CONNECTION — which planet or house this hobby activates</div>
  </div>
  <!-- Add more cards for additional hobbies -->
</div>
```

---

## Section: AI时代互补矩阵

```html
<div class="section-label">
  <div class="sl-line"></div>
  <div class="sl-text">AI终极缺陷 vs CHILD_NAME天然优势 · 完美互补对照</div>
  <div class="sl-line r"></div>
</div>

<div class="main-table">
  <div class="table-header">
    <div class="th th-dim">AI缺失的核心维度</div>
    <div class="th th-ai">🤖 AI的表现与瓶颈</div>
    <div class="th th-child">⚡ CHILD_NAME的天然优势<br><span style="font-weight:400;font-size:10.5px;">(TYPE / PATTERN格)</span></div>
    <div class="th th-combo">🔥 完美互补合体效果<br><span style="font-weight:400;font-size:10.5px;">(CHILD + AI)</span></div>
  </div>
  <div class="table-rows">

    <!-- ROW 1: Intent / Desire / Drive -->
    <div class="table-row">
      <div class="cell cell-dim">
        <div class="cell-dim-icon">ICON_1</div>
        <div class="cell-dim-num">01</div>
        <div class="cell-dim-title">DIMENSION_TITLE_1<br>（中文）</div>
        <div class="cell-dim-en">English Subtitle</div>
      </div>
      <div class="cell cell-ai">
        <div class="cell-title">AI_LIMITATION_TITLE_1</div>
        <div class="cell-text">AI_SPECIFIC_WEAKNESS_DESCRIPTION — concrete, not generic. Explain WHY this is a structural limitation, not just a current gap.</div>
      </div>
      <div class="cell cell-child">
        <div class="cell-title">CHILD_STRENGTH_TITLE_1</div>
        <div class="cell-text">
          CHILD_STRENGTH_DESCRIPTION — reference specific 神煞, MBTI function, planet, or hobby by name.<br>
          <span class="stat">SHENSHA_OR_SCORE</span><span class="stat">SECOND_SIGNAL</span>
        </div>
      </div>
      <div class="cell cell-combo">
        <div class="cell-title">COMBO_TITLE_1</div>
        <div class="cell-text">COMBO_DESCRIPTION — concrete division of labor: CHILD_NAME does X, AI does Y. Make it feel like a business strategy.</div>
      </div>
    </div>

    <!-- ROW 2: Skin in the Game / Stakes -->
    <div class="table-row">
      [same 4-cell structure, different dimension]
    </div>

    <!-- ROW 3: First-Hand Grounding / Specific unique gift -->
    <div class="table-row">
      [same 4-cell structure, different dimension]
    </div>

  </div>
</div>
```

---

## Section: 必须警惕的短板

```html
<div class="warning-section">
  <div class="warning-header">
    <div class="warning-header-icon">⚠️</div>
    <div class="warning-header-text">必须警惕的反向短板</div>
    <div class="warning-header-sub">——AI如何精准救场</div>
  </div>
  <div class="warning-grid">

    <div class="warning-card">
      <div class="warning-card-header">
        <div class="warning-card-icon">ICON</div>
        <div class="warning-card-title">短板 1：WEAKNESS_LABEL（score or 神煞）</div>
      </div>
      <div class="warning-card-text">
        WEAKNESS_DESCRIPTION — what situations this creates, how it shows up in daily life.
        <span class="ai-solution">🤖 AI救场：SPECIFIC_AI_USE — name the exact kind of AI task that compensates. Not "use AI" but "let AI handle X so CHILD_NAME's energy stays on Y".</span>
      </div>
    </div>

    <div class="warning-card">
      <div class="warning-card-header">
        <div class="warning-card-icon">ICON</div>
        <div class="warning-card-title">短板 2：WEAKNESS_LABEL</div>
      </div>
      <div class="warning-card-text">
        WEAKNESS_DESCRIPTION
        <span class="ai-solution">🤖 AI救场：SPECIFIC_AI_USE</span>
      </div>
    </div>

  </div>
</div>
```

---

## Section: AI时代培养策略

```html
<div class="section-label" style="padding-top:20px;">
  <div class="sl-line"></div>
  <div class="sl-text">在AI时代，如何培养 CHILD_NAME？</div>
  <div class="sl-line r"></div>
</div>

<div class="strategies-section">
  <div class="strategies-grid">

    <div class="strategy-card">
      <div class="strategy-num">1</div>
      <div class="strategy-icon">ICON</div>
      <div class="strategy-title">STRATEGY_1_TITLE — protect/develop their core irreplaceable gift first</div>
      <div class="strategy-text">STRATEGY_1_TEXT — concrete action. Reference the specific hobby or gift.</div>
    </div>

    <div class="strategy-card">
      <div class="strategy-num">2</div>
      <div class="strategy-icon">ICON</div>
      <div class="strategy-title">STRATEGY_2_TITLE — use AI as tool for their specific weak area</div>
      <div class="strategy-text">STRATEGY_2_TEXT — exact AI use case tied to their weakness.</div>
    </div>

    <div class="strategy-card">
      <div class="strategy-num">3</div>
      <div class="strategy-icon">ICON</div>
      <div class="strategy-title">STRATEGY_3_TITLE — build "skin in the game" through their hobby</div>
      <div class="strategy-text">STRATEGY_3_TEXT — specific activity that develops real-stakes experience.</div>
    </div>

    <div class="strategy-card">
      <div class="strategy-num">4</div>
      <div class="strategy-icon">ICON</div>
      <div class="strategy-title">培养「CHILD_METAPHOR + AI TOOL_METAPHOR」心智</div>
      <div class="strategy-text">STRATEGY_4_TEXT — the ultimate mental model. Goal: not an AI tool user, but someone who uses AI to amplify their irreplaceable human core.</div>
    </div>

  </div>
</div>
```

---

## Section: 终极发展目标

```html
<div class="final-goal">
  <div class="trend-arrow">📈</div>
  <div class="final-goal-top">
    <div class="trophy">🏆</div>
    <div class="final-goal-title">CHILD_NAME的终极发展目标</div>
  </div>
  <div class="final-goal-main">
    让CHILD_NAME成为一个 <span class="key">「GOAL_DESCRIPTION — evocative, specific to this child's profile」</span> 的AI时代头号玩家
  </div>
  <div class="final-goal-sub">
    <div class="fgs-item fgs-ai"><strong>AI 负责：</strong>AI_ROLE_DESCRIPTION — structure, patience, knowledge retrieval, execution support</div>
    <div class="fgs-item fgs-child"><strong>CHILD_NAME 负责：</strong>CHILD_ROLE_DESCRIPTION — <strong>那个只有他/她才能做到的不可替代的核心</strong></div>
  </div>
</div>
```

---

## Multi-Child Separator

```html
<div class="child-sep">
  <div class="sep-line"></div>
  <div class="sep-text">N个孩子 · N种不可替代</div>
  <div class="sep-line"></div>
</div>
```
