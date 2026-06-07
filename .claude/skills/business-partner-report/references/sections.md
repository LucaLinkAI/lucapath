# HTML Section Skeletons — Business Partner Report

Replace ALL_CAPS placeholders with generated content. Preserve every class and inline style pattern.

---

## Full Document Wrapper

```html
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TEAM_NAME 事业合伙人相性报告</title>
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
[SECTION_4_PAIRWISE_COMPATIBILITY]
[SECTION_5_FORTUNE_TIMING]
[SECTION_6_COMPLEMENTARITY_MATRIX]
[SECTION_7_CORE_RECOMMENDATIONS]
[SECTION_8_ONE_LINERS]
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
  <div class="hero-bg2"></div>
  <div class="hero-eyebrow">八字 · MBTI · 事业合伙人命理相性</div>
  <div class="hero-badge">▸ TEAM_NAME · N位合伙人 · INDUSTRY_DIRECTION</div>
  <div class="hero-title">TEAM_NAME<br>事业合伙人深度相性报告</div>
  <div class="hero-sub">PARTNER1_NAME · PARTNER2_NAME ...</div>
  <div class="hero-partners">
    <!-- One chip per partner, separated by × -->
    <div class="partner-chip">
      <div class="partner-chip-dot" style="background:PARTNER_FAINT_COLOR;color:PARTNER_COLOR;">首</div>
      <div>
        <div class="partner-chip-name">PARTNER_NAME</div>
        <div class="partner-chip-sub">DAYMASTER · MBTI · BUSINESS_ROLE</div>
      </div>
    </div>
    <div class="hero-sep">×</div>
    <!-- repeat for each partner -->
  </div>
  <div class="ornament">
    <div class="ornament-line"></div>
    <div class="ornament-dia">◆</div>
    <div class="ornament-line r"></div>
  </div>
</div>
```

---

## Section 壹 — 合伙人命盘总览

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">壹</div>
    <div class="section-title">合伙人命盘总览</div>
    <div class="section-line"></div>
  </div>

  <div class="table-wrap">
    <table class="overview-table">
      <thead>
        <tr>
          <th>合伙人</th>
          <th>日主 · 格局</th>
          <th>MBTI</th>
          <th>核心事业神煞</th>
          <th>天然商业角色</th>
        </tr>
      </thead>
      <tbody>
        <!-- One row per partner -->
        <tr>
          <td>
            <div class="t-name" style="color:PARTNER_COLOR;">NAME</div>
            <div style="font-size:11px;color:var(--ink-muted);">TEAM_ROLE · YEAR.MONTH.DAY</div>
          </td>
          <td>DAYMASTER日主<br><span style="font-size:12px;color:var(--ink-muted);">PATTERN格 · STRENGTH</span></td>
          <td><span class="tag tag-mbti">TYPE</span></td>
          <td>
            <div class="star-row">
              <span class="sb sb-p1">SHENSHA_1</span>
              <span class="sb sb-gray">SHENSHA_2</span>
              <span class="sb sb-p3">SHENSHA_3</span>
            </div>
          </td>
          <td style="font-size:12.5px;color:var(--ink-soft);">BUSINESS_ROLE_LINE1<br>BUSINESS_ROLE_LINE2</td>
        </tr>
        <!-- repeat for each partner -->
      </tbody>
    </table>
  </div>

  <!-- Top 3 most revealing partnership discoveries -->
  <div class="callout">
    <strong>最惊人的合伙人命理发现：</strong>① DISCOVERY_1 ② DISCOVERY_2 ③ DISCOVERY_3
  </div>

  <!-- Partner Five Elements Business Chain -->
  <div class="partner-map">
    <div style="text-align:center;margin-bottom:20px;font-size:11px;letter-spacing:0.15em;color:var(--accent-mid);font-weight:500;">合伙人五行商业能量链</div>
    <div class="chain">
      <div class="chain-node cn-ELEMENT_CLASS">
        <div class="cn-label">ROLE</div>
        <div class="cn-main">NAME</div>
        <div class="cn-sub" style="color:PARTNER_COLOR;">DAYMASTER · METAPHOR</div>
        <div class="cn-domain">主导：BUSINESS_DOMAIN</div>
      </div>
      <div class="chain-arrow">RELATIONSHIP_LABEL<br>↓</div>
      <!-- repeat nodes + arrows for all partners -->
    </div>
    <div style="text-align:center;margin-top:16px;font-size:11.5px;color:var(--ink-muted);line-height:1.9;">
      CHAIN_DESCRIPTION<br>
      <span style="color:var(--accent-mid);">CHAIN_BUSINESS_INSIGHT</span>
    </div>
  </div>
</div>
```

---

## Section 贰 — N人商业人格深度画像

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">贰</div>
    <div class="section-title">N人商业人格深度画像</div>
    <div class="section-line"></div>
  </div>

  <!-- Use person-grid-3 for ≤3 partners; person-grid-2 for 4+ partners -->
  <div class="person-grid-3">

    <div class="person-card">
      <div class="person-header">
        <div class="person-avatar" style="background:PARTNER_FAINT;color:PARTNER_COLOR;">首字</div>
        <div class="person-meta">
          <div class="person-name-zh">NAME</div>
          <div class="person-name-en">TEAM_ROLE · TYPE · DAYMASTER日主</div>
          <div class="person-tags">
            <span class="tag tag-bazi">PATTERN格</span>
            <span class="tag tag-mbti">TYPE</span>
            <span class="tag tag-role">TEAM_ROLE</span>
          </div>
        </div>
      </div>
      <div class="person-body">
        <!-- 4 trait rows: 商业核心/核心天赋/关键神煞/事业暗礁 -->
        <div class="trait-row">
          <div class="trait-label">商业核心</div>
          <div class="trait-value">COMMERCIAL_CORE — 8–12 char vivid label</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">核心天赋</div>
          <div class="trait-value">KEY_TALENT</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">KEY_SHENSHA</div>
          <div class="trait-value">SHENSHA_BUSINESS_MEANING</div>
        </div>
        <div class="trait-row">
          <div class="trait-label">事业暗礁</div>
          <div class="trait-value">BUSINESS_SHADOW_TRAIT</div>
        </div>
        <!-- Strength bars: 4 business dimensions -->
        <div style="margin-top:10px;">
          <div style="font-size:10.5px;color:var(--ink-muted);margin-bottom:5px;">商业能量维度</div>
          <div class="strength-row">
            <div class="strength-label">DIMENSION_1</div>
            <div class="strength-track"><div class="strength-fill" style="width:PCT%;background:PARTNER_MID_COLOR;"></div></div>
            <div class="strength-val">PCT</div>
          </div>
          <div class="strength-row">
            <div class="strength-label">DIMENSION_2</div>
            <div class="strength-track"><div class="strength-fill" style="width:PCT%;background:PARTNER_MID_COLOR;"></div></div>
            <div class="strength-val">PCT</div>
          </div>
          <div class="strength-row">
            <div class="strength-label">DIMENSION_3</div>
            <div class="strength-track"><div class="strength-fill" style="width:PCT%;background:PARTNER_MID_COLOR;"></div></div>
            <div class="strength-val">PCT</div>
          </div>
          <div class="strength-row">
            <div class="strength-label">DIMENSION_4</div>
            <div class="strength-track"><div class="strength-fill" style="width:PCT%;background:PARTNER_MID_COLOR;"></div></div>
            <div class="strength-val">PCT</div>
          </div>
        </div>
        <div class="person-quote" style="border-left-color:PARTNER_MID_COLOR;">POETIC_BUSINESS_ONE_LINER</div>
      </div>
    </div>

    <!-- repeat person-card for each partner -->
  </div>
</div>
```

---

## Section 叁 — 两两事业相性深度分析

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">叁</div>
    <div class="section-title">两两事业相性深度分析</div>
    <div class="section-line"></div>
  </div>

  <!-- One rel-card per pair -->
  <div class="rel-card">
    <div class="rel-header">
      <div class="rel-icon" style="background:PARTNER_A_FAINT;color:PARTNER_A_COLOR;border-radius:8px;">合伙</div>
      <div class="rel-title-block">
        <div class="rel-title">PARTNER_A × PARTNER_B · ELEMENT_A × ELEMENT_B</div>
        <div class="rel-subtitle">TYPE_A × TYPE_B · ELEMENT_RELATIONSHIP · MBTI_RELATIONSHIP_LABEL</div>
      </div>
      <div style="text-align:center;">
        <div class="rel-score">SCORE</div>
        <div class="rel-score-label">事业合伙指数 /100</div>
      </div>
    </div>
    <div class="rel-body">
      <div class="rel-cols">
        <!-- Left: 五行商业层面, 命格共鸣, MBTI决策化学 -->
        <div>
          <div class="insight-block">
            <div class="insight-head">五行商业层面</div>
            <div class="insight-text">ELEMENT_BUSINESS_ANALYSIS — which domains they cover together, who energizes whom in which function</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">命格共鸣</div>
            <div class="insight-text">SPECIAL_CHART_CONNECTION — exact pillar, star, or element coincidence between their charts</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">TYPE_A × TYPE_B 决策化学</div>
            <div class="insight-text">MBTI_DECISION_CHEMISTRY — how they process information differently, where they overlap, where they clash</div>
          </div>
        </div>
        <!-- Right: 最强协同点, 最优分工建议 -->
        <div>
          <div class="insight-block">
            <div class="insight-head">最强协同点</div>
            <div class="insight-text">BIGGEST_SYNERGY — the single business domain where this pair is most powerful together</div>
          </div>
          <div class="insight-block">
            <div class="insight-head">最优分工建议</div>
            <div class="insight-text">
              <strong>PARTNER_A主导：</strong>DOMAIN_A<br>
              <strong>PARTNER_B主导：</strong>DOMAIN_B<br>
              <strong>共同决策：</strong>SHARED_DOMAIN
            </div>
          </div>
          <div class="insight-block">
            <div class="insight-head">财运互引</div>
            <div class="insight-text">WEALTH_DYNAMIC — who is the wealth attractor, who is the wealth builder; does one's chart boost the other's income potential?</div>
          </div>
        </div>
      </div>

      <!-- Friction + Solution boxes -->
      <div class="rel-cols" style="margin-top:6px;">
        <div>
          <div class="friction-box">
            <div class="friction-title">⚡ 最大合作摩擦</div>
            <div class="friction-text">
              <strong>ROOT_CAUSE：</strong>FRICTION_DESCRIPTION — trace to specific chart element or MBTI function clash<br><br>
              <strong>触发场景：</strong>SPECIFIC_TRIGGER_SCENARIO
            </div>
          </div>
        </div>
        <div>
          <div class="solution-box">
            <div class="solution-title">✦ 最优协作协议</div>
            <div class="solution-text">
              <strong>决策规则：</strong>CONCRETE_DECISION_PROTOCOL<br><br>
              <strong>沟通节奏：</strong>CONCRETE_COMMUNICATION_CADENCE
            </div>
          </div>
        </div>
      </div>

      <div class="callout" style="margin-top:16px;">
        <strong>这段合伙最不可替代的地方：</strong>UNIQUE_PARTNERSHIP_VALUE — what this specific pairing can do that neither could alone, citing chart elements.
      </div>
    </div>
  </div>

  <!-- repeat rel-card for each pair -->
</div>
```

---

## Section 肆 — 团队事业运势窗口

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">肆</div>
    <div class="section-title">团队事业运势窗口</div>
    <div class="section-line"></div>
  </div>

  <!-- Fortune timing table -->
  <div class="table-wrap" style="margin-bottom:18px;">
    <table class="fortune-table">
      <thead>
        <tr>
          <th>合伙人</th>
          <th>当前大运（年份）</th>
          <th>大运五行</th>
          <th>商业运势阶段</th>
          <th>本阶段最强场景</th>
        </tr>
      </thead>
      <tbody>
        <!-- One row per partner -->
        <tr>
          <td>
            <span style="font-weight:500;color:PARTNER_COLOR;">NAME</span><br>
            <span style="font-size:11px;color:var(--ink-muted);">DAYMASTER · TYPE</span>
          </td>
          <td style="font-size:12.5px;">YEAR_RANGE 大运<br><span style="color:var(--ink-muted);font-size:11px;">STEM_BRANCH</span></td>
          <td><span class="tag tag-bazi">DAYUN_ELEMENT</span></td>
          <td><span class="fortune-phase PHASE_CLASS">PHASE_LABEL</span></td>
          <td style="font-size:12.5px;color:var(--ink-soft);">BEST_BUSINESS_SCENARIO</td>
        </tr>
        <!-- repeat for each partner -->
      </tbody>
    </table>
  </div>

  <div class="two-col" style="margin-bottom:18px;">
    <div class="summary-box">
      <div class="summary-eyebrow">团队最佳联合爆发窗口</div>
      <div class="summary-text">
        <strong>YEAR_RANGE（X–Y年）：</strong>COLLECTIVE_PEAK_ANALYSIS — when do 2+ partners simultaneously hit wealth or output phases? Name specific years and what to target.
        <br><br>
        <strong>当前最强财运角色：</strong>PARTNER_NAME 目前正处于PHASE，是团队的ROLE_IN_TEAM。
      </div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">需要导航的变局时间</div>
      <div class="summary-text">
        <strong>PARTNER_NAME 大运换运：</strong>YEAR 年前后，TRANSITION_DESCRIPTION — what this means for the team and how to prepare.
        <br><br>
        <strong>团队集体注意：</strong>WARNING_PATTERN — any collective fortune tension worth flagging.
      </div>
    </div>
  </div>

  <div class="callout teal">
    <strong>团队贵人运分析：</strong>NOBLE_HELPER_ANALYSIS — who carries 天乙贵人 energy this cycle; which partner's chart is most likely to attract investors, key clients, or strategic allies in YEAR_RANGE.
  </div>
</div>
```

---

## Section 伍 — 团队能量互补矩阵

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">伍</div>
    <div class="section-title">团队能量互补矩阵</div>
    <div class="section-line"></div>
  </div>

  <div class="two-col" style="margin-bottom:18px;">
    <div class="summary-box">
      <div class="summary-eyebrow">MBTI 团队商业生态</div>
      <div class="summary-text">
        <strong>团队强项：</strong>MBTI_COLLECTIVE_STRENGTHS<br>
        <strong>集体盲区：</strong>MBTI_COLLECTIVE_BLIND_SPOT<br>
        <strong>缺失功能：</strong>MISSING_FUNCTION — what quadrant is absent (NT/NF/ST/SF) and what business function goes unmanned?<br>
        <strong>建议补位：</strong>HIRING_OR_ADVISOR_SUGGESTION
      </div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">五行能量覆盖分析</div>
      <div class="summary-text">
        <strong>已覆盖：</strong>PRESENT_ELEMENTS — and which business domains they provide<br>
        <strong>缺失：</strong>MISSING_ELEMENTS — and which business domains are vulnerable<br>
        <strong>五行俱全：</strong>YES/NO — if yes, celebrate the complete coverage; if no, name the specific operational risk
      </div>
    </div>
  </div>

  <!-- Complementarity matrix table -->
  <div class="table-wrap" style="margin-bottom:18px;">
    <table class="matrix-table">
      <thead>
        <tr>
          <th>业务领域</th>
          <th>PARTNER_1_NAME</th>
          <th>PARTNER_2_NAME</th>
          <!-- more partner columns if needed -->
          <th>推荐主导</th>
        </tr>
      </thead>
      <tbody>
        <!-- One row per business domain -->
        <tr>
          <td><span class="domain-label">战略规划</span></td>
          <td><span class="fit-high">★★★</span></td>
          <td><span class="fit-med">★★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER — why (chart + type basis)</td>
        </tr>
        <tr>
          <td><span class="domain-label">执行落地</span></td>
          <td><span class="fit-med">★★</span></td>
          <td><span class="fit-high">★★★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER</td>
        </tr>
        <tr>
          <td><span class="domain-label">财务资金</span></td>
          <td><span class="fit-low">★</span></td>
          <td><span class="fit-high">★★★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER</td>
        </tr>
        <tr>
          <td><span class="domain-label">市场品牌</span></td>
          <td><span class="fit-high">★★★</span></td>
          <td><span class="fit-low">★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER</td>
        </tr>
        <tr>
          <td><span class="domain-label">客户关系</span></td>
          <td><span class="fit-med">★★</span></td>
          <td><span class="fit-med">★★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER</td>
        </tr>
        <tr>
          <td><span class="domain-label">创新研发</span></td>
          <td><span class="fit-high">★★★</span></td>
          <td><span class="fit-low">★</span></td>
          <td style="font-size:12px;color:var(--ink-soft);">BEST_FIT_PARTNER</td>
        </tr>
        <!-- adjust rows to match your domain analysis -->
      </tbody>
    </table>
  </div>

  <div class="two-col">
    <div class="summary-box">
      <div class="summary-eyebrow">PATTERN_1_LABEL (e.g. 驿马分布的意义)</div>
      <div class="summary-text">PATTERN_1_BUSINESS_ANALYSIS</div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">PATTERN_2_LABEL (e.g. 无土格局风险)</div>
      <div class="summary-text">PATTERN_2_BUSINESS_ANALYSIS</div>
    </div>
  </div>
</div>
```

---

## Section 陆 — 事业合作核心建议总览

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">陆</div>
    <div class="section-title">事业合作核心建议总览</div>
    <div class="section-line"></div>
  </div>

  <!-- Partnership summary table -->
  <div class="table-wrap" style="margin-bottom:20px;">
    <table class="overview-table">
      <thead>
        <tr>
          <th>合伙关系</th>
          <th>命理最大协同</th>
          <th>最需做的一件事</th>
          <th>合伙指数</th>
        </tr>
      </thead>
      <tbody>
        <!-- one row per pair -->
        <tr>
          <td>
            <span style="font-weight:500;color:PARTNER_A_COLOR;">PARTNER_A × PARTNER_B</span><br>
            <span style="font-size:11px;color:var(--ink-muted);">ELEMENT_PAIR · TYPE_PAIR</span>
          </td>
          <td style="font-size:12.5px;">CORE_SYNERGY</td>
          <td style="font-size:12.5px;">MOST_IMPORTANT_ACTION</td>
          <td>
            <span style="font-family:'Cormorant Garamond',serif;font-size:22px;color:var(--accent-mid);">SCORE</span>
          </td>
        </tr>
        <!-- repeat for each pair -->
      </tbody>
    </table>
  </div>

  <div class="two-col">
    <div class="summary-box">
      <div class="summary-eyebrow">合伙人协作仪式建议</div>
      <div class="summary-text">
        CONCRETE_RITUAL — a specific recurring practice grounded in chart/type insights (e.g., "每月一次的战略复盘：Jeff主持框架，小明挑战假设" — not generic "communicate more").
      </div>
    </div>
    <div class="summary-box">
      <div class="summary-eyebrow">命理最佳战略里程碑</div>
      <div class="summary-text">
        STRATEGIC_MILESTONE — a specific goal to target in the upcoming fortune window, with timing grounded in chart analysis (e.g., "2026年双方同走财星，正是融资/签约大客户的黄金窗口").
      </div>
    </div>
  </div>
</div>
```

---

## Section 柒 — N人事业命格一句话

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">柒</div>
    <div class="section-title">N人事业命格一句话</div>
    <div class="section-line"></div>
  </div>

  <!-- One quote-card per partner -->
  <div class="quote-card">
    <div class="qc-bar" style="background:PARTNER_MID_COLOR;"></div>
    <div>
      <div class="qc-name" style="color:PARTNER_COLOR;">NAME · TYPE · DAYMASTER元素 · TEAM_ROLE</div>
      <div class="qc-text">
        BUSINESS_POETIC_SUMMARY — 3–5 sentences. Structure:
        1) Business-nature metaphor tied to their element (e.g., "她是一颗庚金利剑")
        2) Their commercial superpower (name specific 神煞 or MBTI function)
        3) Their collaboration blind spot (be compassionate, not judgmental)
        4) Their irreplaceable role in THIS team's ecosystem
      </div>
    </div>
  </div>

  <!-- repeat for each partner -->
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
    <!-- One line per partner, using their element + business metaphor -->
    ELEMENT_A为BUSINESS_METAPHOR_A，NATURE_BUSINESS_LINE_A<br>
    ELEMENT_B为BUSINESS_METAPHOR_B，NATURE_BUSINESS_LINE_B<br>
    <!-- add more lines for additional partners -->
    <br>
    <!-- The venture itself -->
    ELEMENT_RELATIONSHIP_DESCRIPTION，N种力量，一个事业<br>
    <br>
    <span style="font-size:13px;color:var(--ink-faint);">
      PARTNER_A用GIFT_A铺路，PARTNER_B用GIFT_B筑基<br>
      这件事的边界，比任何一个人想象的都要大。
    </span>
  </div>
  <div class="poem-source">TEAM_NAME 合伙人团队 · 八字 × MBTI 事业相性报告 · YEAR</div>
</div>
```

---

## Section 贰 — 命盘十神骨架 · 神煞全景对照

Multi-column table layout: leftmost column = labels, then one column per partner. Add/remove `th.th-partner` columns to match partner count (2–6). Use each partner's assigned color (from Step 6) for their column header. For light-paper theme, use softer badge backgrounds (`rgba(..., 0.08)`) and dark text colors.

```html
<div class="section">
  <div class="section-header">
    <div class="section-num">贰</div>
    <div class="section-title">命盘十神骨架 · 神煞全景对照</div>
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
      <!-- One row per partner — repeat the tr block for each person -->
      <tr style="border-bottom:0.5px solid rgba(0,0,0,0.07)">
        <td style="padding:14px 14px;font-family:'Noto Serif SC',serif;font-size:14px;font-weight:500;color:MEMBER_COLOR;white-space:nowrap">MEMBER_NAME</td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft);white-space:nowrap">DAYMASTER_CHAR日主</td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft);white-space:nowrap">YIN_YANG_ELEMENT <!-- e.g. 阳水 --></td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-soft)">PATTERN_NAME <!-- e.g. 正印·偏财格 --></td>
        <td style="padding:14px 10px;white-space:nowrap">
          <span style="font-size:12px;padding:2px 10px;border-radius:20px;color:STRENGTH_COLOR;background:STRENGTH_BG">STRENGTH_LABEL</span>
        </td>
        <td style="padding:14px 10px;font-size:13px;color:var(--ink-muted);white-space:nowrap">MATERIAL_METAPHOR <!-- e.g. 江河奔流 --></td>
        <td style="padding:14px 14px;font-size:12.5px;color:var(--ink-soft)">KW1、KW2、KW3、KW4</td>
      </tr>
      <!-- repeat tr for each additional partner -->
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
        <th style="padding:10px 12px;text-align:left;font-size:9.5px;font-family:'DM Mono',monospace;letter-spacing:0.12em;color:var(--ink-muted);background:rgba(0,0,0,0.04);border-bottom:1px solid rgba(0,0,0,0.1);border-right:0.5px solid rgba(0,0,0,0.08);width:90px">十神 / 合伙人</th>
        <!-- Repeat th.th-partner for each partner: -->
        <th style="padding:10px 8px;text-align:center;background:rgba(PARTNER1_RGB,0.06);border-bottom:1px solid rgba(0,0,0,0.1);min-width:110px">
          <div style="font-family:'Noto Serif SC',serif;font-size:13px;font-weight:500;color:PARTNER1_COLOR;margin-bottom:2px">PARTNER1_NAME</div>
          <div style="font-size:9.5px;color:var(--ink-muted)">PARTNER1_ROLE</div>
          <div style="font-size:9.5px;font-family:'DM Mono',monospace;color:PARTNER1_COLOR;opacity:0.7">DAYMASTER1·MBTI1</div>
        </th>
        <th style="padding:10px 8px;text-align:center;background:rgba(PARTNER2_RGB,0.06);border-bottom:1px solid rgba(0,0,0,0.1);min-width:110px">
          <div style="font-family:'Noto Serif SC',serif;font-size:13px;font-weight:500;color:PARTNER2_COLOR;margin-bottom:2px">PARTNER2_NAME</div>
          <div style="font-size:9.5px;color:var(--ink-muted)">PARTNER2_ROLE</div>
          <div style="font-size:9.5px;font-family:'DM Mono',monospace;color:PARTNER2_COLOR;opacity:0.7">DAYMASTER2·MBTI2</div>
        </th>
        <!-- add more th columns for partner 3, 4... -->
      </tr>
    </thead>
    <tbody>
      <!-- Rows: 年干 | 年支 | 月干 | 月支 | 日干(日主) | 日支 | 时干 | 时支 | 格局 | 日主强弱 -->
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.025);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);white-space:nowrap;font-family:'DM Mono',monospace">年干</td>
        <!-- Cell for each partner: ten-god badge -->
        <td style="padding:6px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <div style="display:inline-flex;flex-direction:column;align-items:center;gap:1px;padding:4px 10px;border-radius:6px;border:0.5px solid TG_COLOR40;background:TG_BG;min-width:48px">
            <span style="font-family:'Noto Serif SC',serif;font-size:16px;font-weight:500;color:TG_COLOR">STEM</span>
            <span style="font-size:9px;color:TG_COLOR;opacity:0.85">TG_NAME</span>
          </div>
        </td>
        <!-- repeat cell for each additional partner -->
      </tr>
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.025);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);white-space:nowrap;font-family:'DM Mono',monospace">年支</td>
        <!-- cells... -->
      </tr>
      <!-- 月干 | 月支 rows same pattern -->
      <!-- 日干 row — Day Master in gold for ALL partners -->
      <tr>
        <td style="padding:8px 12px;font-size:10.5px;font-weight:500;color:#a07820;background:rgba(180,140,20,0.05);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.06);font-family:'DM Mono',monospace">日干</td>
        <td style="padding:6px 5px;text-align:center;background:rgba(180,140,20,0.04);border-bottom:0.5px solid rgba(0,0,0,0.06)">
          <div style="display:inline-flex;flex-direction:column;align-items:center;gap:1px;padding:4px 10px;border-radius:6px;border:0.5px solid rgba(180,140,20,0.4);background:rgba(180,140,20,0.1);min-width:48px">
            <span style="font-family:'Noto Serif SC',serif;font-size:16px;font-weight:500;color:#a07820">DAYMASTER</span>
            <span style="font-size:9px;color:#a07820;opacity:0.9">日主</span>
          </div>
        </td>
        <!-- repeat for each partner -->
      </tr>
      <!-- 日支 | 时干 | 时支 rows same pattern as 年干 -->
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
          <!-- 身强: color #1a6b3a; 偏弱/身弱: color #a07820; 极弱: color #c04030 -->
          <span style="display:inline-block;padding:2px 10px;border-radius:20px;font-size:11px;font-weight:500;color:STRENGTH_COLOR;background:STRENGTH_BG">STRENGTH_LABEL</span>
        </td>
        <!-- repeat -->
      </tr>
    </tbody>
  </table>
  </div>

  <!-- Ten Gods Insight Cards — one per partner -->
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-bottom:32px">
    <!-- One card per partner: dominant 十神 pattern + business meaning -->
    <div style="background:rgba(PARTNER1_RGB,0.05);border:0.5px solid rgba(PARTNER1_RGB,0.2);border-radius:10px;padding:14px">
      <div style="font-family:'Noto Serif SC',serif;font-size:13px;color:PARTNER1_COLOR;margin-bottom:6px;font-weight:500">PARTNER1_NAME · DAYMASTER1·格局</div>
      <div style="font-size:11.5px;color:var(--ink-soft);line-height:1.7">DOMINANT_TG_PATTERN_BUSINESS_MEANING — e.g., "食神旺：产品直觉和创意是其商业核心，适合定义产品方向；伤官的规则突破性使其能找到常规路径之外的市场机会。"</div>
    </div>
    <!-- repeat for each partner -->
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
        <th style="padding:10px 12px;text-align:left;font-size:9.5px;font-family:'DM Mono',monospace;letter-spacing:0.12em;color:var(--ink-muted);background:rgba(0,0,0,0.04);border-bottom:1px solid rgba(0,0,0,0.1);border-right:0.5px solid rgba(0,0,0,0.08);width:130px">神煞 / 合伙人</th>
        <!-- One th per partner — same as 十神 table above -->
        <th style="padding:10px 8px;text-align:center;background:rgba(PARTNER1_RGB,0.06);border-bottom:1px solid rgba(0,0,0,0.1)">
          <div style="font-size:13px;font-weight:500;color:PARTNER1_COLOR;font-family:'Noto Serif SC',serif">PARTNER1_NAME</div>
          <div style="font-size:9px;color:var(--ink-muted)">PARTNER1_ROLE</div>
        </th>
        <!-- repeat -->
      </tr>
    </thead>
    <tbody>

      <!-- ═══ 命格类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">命格类 · CHARACTER STARS</td></tr>

      <!-- Badge helper: green=有, gold=双现, red=凶煞, dash=无 -->
      <!-- Green badge:  display:inline-flex;align-items:center;gap:3px;padding:3px 8px;border-radius:20px;font-size:10.5px;font-weight:500;background:rgba(42,128,80,0.1);border:0.5px solid rgba(60,180,100,0.3);color:#2a8050 -->
      <!-- Gold badge:   ...background:rgba(160,120,20,0.1);border:0.5px solid rgba(180,140,20,0.3);color:#a07820 -->
      <!-- Red badge:    ...background:rgba(180,50,40,0.1);border:0.5px solid rgba(200,70,60,0.25);color:#c04030 -->
      <!-- Absent:       color:rgba(0,0,0,0.2);font-size:14px  → just render —  -->

      <tr>
        <td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">魁罡<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Iron Will</span></td>
        <td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td>
        <!-- repeat td for each additional partner -->
      </tr>
      <tr>
        <td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">将星<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Command</span></td>
        <td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td>
      </tr>
      <tr>
        <td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">华盖<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Creative</span></td>
        <td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td>
      </tr>
      <tr>
        <td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">驿马<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Travel</span></td>
        <td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td>
      </tr>
      <tr>
        <td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">阴阳差错<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Misalign</span></td>
        <td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td>
      </tr>

      <!-- ═══ 贵人类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">贵人类 · NOBILITY STARS</td></tr>
      <!-- 文昌 | 天乙贵人 | 国印贵人 | 太极贵人 — same row pattern -->
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">文昌<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Literary</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">天乙贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Noble</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">国印贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">State Seal</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">太极贵人<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Supreme</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ 人缘类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">人缘类 · SOCIAL STARS</td></tr>
      <tr><td style="padding:9px 12px;font-size:11px;font-weight:500;color:var(--ink-soft);background:rgba(0,0,0,0.02);border-right:0.5px solid rgba(0,0,0,0.07);border-bottom:0.5px solid rgba(0,0,0,0.05)">桃花<span style="font-size:9px;display:block;opacity:.5;font-family:'DM Mono',monospace">Charisma</span></td><td style="padding:7px 5px;text-align:center;border-bottom:0.5px solid rgba(0,0,0,0.05)">STATUS_BADGE</td></tr>

      <!-- ═══ 凶煞类 ═══ -->
      <tr><td colspan="N+1" style="padding:4px 12px;background:rgba(0,0,0,0.04);font-size:9.5px;letter-spacing:0.18em;color:var(--ink-muted);font-family:'DM Mono',monospace;border-bottom:0.5px solid rgba(0,0,0,0.1)">凶煞类 · CHALLENGING STARS</td></tr>
      <!-- 羊刃 | 孤辰/寡宿 | 天罗地网 | 劫煞/亡神 — same row pattern; use red badge when present -->
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
        <!-- repeat for each partner -->
      </tr>

    </tbody>
  </table>
  </div>

  <!-- ══ Part C: 魁罡·将星·华盖·驿马 跨伙伴商业动态 ══ -->
  <div style="font-family:'DM Mono',monospace;font-size:10px;letter-spacing:0.18em;color:var(--ink-muted);margin-bottom:14px">
    03 · 魁罡 · 将星 · 华盖 · 驿马 — 合作 · 领导 · 沟通 动态分析
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">

    <!-- 将星: leadership & command -->
    <div style="background:rgba(48,80,160,0.05);border:0.5px solid rgba(48,80,160,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(48,80,160,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#3050a0;font-weight:500">将星</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(48,80,160,0.6)">指挥 · 决策权 · Command</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>谁有将星：</strong>JIANGXING_HOLDERS_OR_NONE<br>
        <!-- Example interpretations based on count: -->
        <!-- Single: "NAME是天然的指挥中心，团队重大决策建议由其拍板；其他合伙人在各自领域享有充分自主权。" -->
        <!-- Multiple: "NAME_A和NAME_B同时带将星，须划分清晰的决策边界——建议按业务线（产品线/市场线）而非职级来分配权威。两将同台的团队能量极强，但需要事先约定好「各自领域自己说了算」的规则，避免日常决策陷入僵局。" -->
        <!-- None: "团队无将星，倾向集体决策。优点是民主高效，弱点是危机时刻缺乏单线的快速拍板者——建议约定「轮值决策人」机制。" -->
        JIANGXING_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#3050a0;background:rgba(48,80,160,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>合作建议：</strong>JIANGXING_COLLABORATION_PROTOCOL
      </div>
    </div>

    <!-- 魁罡: willpower & role boundaries -->
    <div style="background:rgba(120,80,20,0.05);border:0.5px solid rgba(140,100,20,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(140,100,20,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#8b5c14;font-weight:500">魁罡</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(140,100,20,0.6)">意志 · 边界 · Iron Will</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>谁是魁罡：</strong>KUIGANG_HOLDERS_OR_NONE<br>
        <!-- None: "团队无魁罡，意志表达相对柔性，合作过程中情感协调比规则执行更自然。" -->
        <!-- Single: "NAME是魁罡命，做事风格独立果决，分配给其「单人负责制」的模块时效率最高；避免让其在需要反复共识的委员会式决策中消耗精力。" -->
        <!-- Multiple: "N位魁罡合伙：极强团队意志力的同时，每位都有明确的「不会妥协」的底线。建议：(1) 写下各自的核心不可让步项；(2) 对于这些事项，用轮流「一票否决」而非多数表决；(3) 其余事项充分授权，减少硬碰硬的频率。" -->
        KUIGANG_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#8b5c14;background:rgba(140,100,20,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>沟通协议：</strong>KUIGANG_COMMUNICATION_PROTOCOL
      </div>
    </div>

    <!-- 华盖: creativity & market positioning -->
    <div style="background:rgba(80,40,140,0.05);border:0.5px solid rgba(100,50,160,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(100,50,160,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#6030a0;font-weight:500">华盖</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(100,50,160,0.6)">创意 · 市场调性 · Creative</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>华盖分布：</strong>HUAGAI_DENSITY_AND_HOLDERS<br>
        <!-- Low density (0–1): "团队华盖密度低，商业直觉偏主流务实——产品感强，落地快，但可能在品牌差异化上需要刻意发力。" -->
        <!-- Medium (2): "NAME_A和NAME_B都有华盖，创意共鸣深——产品设计和品牌美学上会天然走向「非主流精品」路线，这是护城河也是受众边界，需要有意识地做用户教育。" -->
        <!-- High (3+): "华盖密集型团队：产品和品牌大概率走在时代前面，拥有非常强的风格辨识度。核心挑战是商业转化——建议引入或外聘一位「无华盖」的务实型商务/运营伙伴来补足落地力。" -->
        HUAGAI_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#6030a0;background:rgba(100,50,160,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>品牌/产品建议：</strong>HUAGAI_PRODUCT_STRATEGY
      </div>
    </div>

    <!-- 驿马: expansion vs stability -->
    <div style="background:rgba(20,80,50,0.05);border:0.5px solid rgba(30,100,60,0.2);border-radius:10px;padding:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding-bottom:8px;border-bottom:0.5px solid rgba(30,100,60,0.15)">
        <span style="font-family:'Noto Serif SC',serif;font-size:15px;color:#1a6038;font-weight:500">驿马</span>
        <span style="font-size:10px;font-family:'DM Mono',monospace;color:rgba(30,100,60,0.6)">扩张 · 稳定 · Mobility</span>
      </div>
      <div style="font-size:11px;color:var(--ink-soft);line-height:1.75;margin-bottom:8px">
        <strong>扩张者 vs 锚点：</strong>YIMA_EXPANDERS_VS_ANCHORS<br>
        <!-- All have 驿马: "全员驿马：高变化容忍度团队，善于快速转型和开拓市场。需要刻意建立稳定的运营底座——考虑外聘一位稳定型COO或首席运营官，否则成长期容易「飞起来但没有根」。" -->
        <!-- Mixed: "NAME_A有驿马（天然拓展者），NAME_B无驿马（天然锚点）。建议：NAME_A主导新市场开拓、合作谈判、异地布局；NAME_B主导核心业务稳定运营和内部流程——这是团队最理想的扩张与稳定分工。" -->
        <!-- None: "团队均无驿马，擅长把一件事做深做精，稳定性极强。跨地域拓展或快速转型时可能感到不自然——建议在进入新市场前做充分的线下调研，而非快速试错模式。" -->
        YIMA_ANALYSIS
      </div>
      <div style="font-size:10.5px;color:#1a6038;background:rgba(30,100,60,0.06);border-radius:6px;padding:8px 10px;line-height:1.6">
        <strong>角色分工建议：</strong>YIMA_ROLE_DIVISION
      </div>
    </div>

  </div>

  <!-- Synthesis Callout -->
  <div class="callout">
    <strong>命盘神煞综合结论：</strong>SHENSHEN_SYNTHESIS — 2–3 sentences: (1) Name this team's overall 神煞 power profile (e.g., "这是一支魁罡领导+驿马开拓的进攻型团队"); (2) The most significant cross-partner 神煞 dynamic; (3) The single most important organizational action implied by the chart — concrete, actionable.
  </div>
</div>
```
