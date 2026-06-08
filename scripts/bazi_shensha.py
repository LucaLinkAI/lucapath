#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
bazi_shensha.py — LucaPath 命理报告的「唯一计算源」(canonical compute source)

把生辰 / 四柱转成 十神 + 14 项神煞,并自带:
  • 日柱 JDN 独立校验 (catch the most basic pillar error)
  • 11 个已验证命盘的回归测试夹具 (--selftest)
  • 表格 HTML 片段生成 (供 business-partner-report 等 skill 直接渲染)

设计原则(对应 skill 规则):
  • 「只渲染、不手写」: 报告里的十神/神煞,表格和正文都必须取自本脚本输出,禁止凭记忆手写。
  • 「绝不继承」: 即使生辰与既有报告一致,也必须用本脚本重算;不要沿用旧报告的神煞结论。

所有神煞严格按经典查表法(见 references/astro-calculations.md),无外部依赖。

用法:
  python3 scripts/bazi_shensha.py --selftest
  python3 scripts/bazi_shensha.py "Joyce,甲寅 丙子 戊戌 己未" "Jeff,丙寅 辛丑 壬戌 戊申"
  python3 scripts/bazi_shensha.py --date "Joyce,1974-12-23,14"   # 仅 day-pillar JDN 推算+展示
"""
import sys, re

# ─────────────────────────────────────────────────────────────
# 基础表 (五行 · 阴阳 · 地支本气)
# ─────────────────────────────────────────────────────────────
STEMS = "甲乙丙丁戊己庚辛壬癸"
BRANCHES = "子丑寅卯辰巳午未申酉戌亥"
# 天干 → (五行, 阴阳: 1=阳 0=阴)
STEM_EL = {'甲':('木',1),'乙':('木',0),'丙':('火',1),'丁':('火',0),'戊':('土',1),
           '己':('土',0),'庚':('金',1),'辛':('金',0),'壬':('水',1),'癸':('水',0)}
# 地支本气(藏干主气) — 十神以本气论。注意阴阳易错点: 子=癸(阴) 午=丁(阴) 巳=丙(阳) 亥=壬(阳)
BR_MAIN = {'子':'癸','丑':'己','寅':'甲','卯':'乙','辰':'戊','巳':'丙',
           '午':'丁','未':'己','申':'庚','酉':'辛','戌':'戊','亥':'壬'}
SHENG = {'木':'火','火':'土','土':'金','金':'水','水':'木'}   # 生
KE    = {'木':'土','土':'水','水':'火','火':'金','金':'木'}    # 克

# ─────────────────────────────────────────────────────────────
# 十神 (Ten Gods) — 以日干为基准,对方以本气论
# ─────────────────────────────────────────────────────────────
def ten_god(day_stem, other_stem):
    de, dp = STEM_EL[day_stem]
    oe, op = STEM_EL[other_stem]
    same = (dp == op)
    if oe == de:               return '比肩' if same else '劫财'   # 同类
    if SHENG[de] == oe:        return '食神' if same else '伤官'   # 我生
    if KE[de] == oe:           return '偏财' if same else '正财'   # 我克
    if KE[oe] == de:           return '七杀' if same else '正官'   # 克我
    if SHENG[oe] == de:        return '偏印' if same else '正印'   # 生我
    raise ValueError(f"no relation {day_stem}->{other_stem}")

def ten_gods(pillars):
    """pillars = (年柱,月柱,日柱,时柱), each 2-char GZ. → dict of 7 positions."""
    yg,yz = pillars[0]; mg,mz = pillars[1]; dg,dz = pillars[2]; hg,hz = pillars[3]
    return {
        '年干': (yg, ten_god(dg, yg)),            '年支': (yz, ten_god(dg, BR_MAIN[yz])),
        '月干': (mg, ten_god(dg, mg)),            '月支': (mz, ten_god(dg, BR_MAIN[mz])),
        '日干': (dg, '日主'),                      '日支': (dz, ten_god(dg, BR_MAIN[dz])),
        '时干': (hg, ten_god(dg, hg)),            '时支': (hz, ten_god(dg, BR_MAIN[hz])),
    }

# ─────────────────────────────────────────────────────────────
# 14 项神煞 — 经典查表公式
# 基准说明: [日柱]=整柱五日 / [日干]=按日干查定支 / [年支或日支]=三合局或三会方
# ─────────────────────────────────────────────────────────────
def _trine(b):  # 三合局 (用于 将星/华盖/驿马/桃花/劫煞亡神)
    for g in [('申','子','辰'),('寅','午','戌'),('亥','卯','未'),('巳','酉','丑')]:
        if b in g: return g

# [日柱] 魁罡 = 庚辰/庚戌/壬辰/壬戌/戊戌
KUIGANG = {'庚辰','庚戌','壬辰','壬戌','戊戌'}
# [日柱] 阴阳差错 = 经典12日(不可增减)
YINYANG = {'丙子','丁丑','戊寅','辛卯','壬辰','癸巳','丙午','丁未','戊申','辛酉','壬戌','癸亥'}
# [年支/日支三合] → 定支
JIANG = {('申','子','辰'):'子',('寅','午','戌'):'午',('亥','卯','未'):'卯',('巳','酉','丑'):'酉'}  # 将星
HUAGAI= {('申','子','辰'):'辰',('寅','午','戌'):'戌',('亥','卯','未'):'未',('巳','酉','丑'):'丑'}  # 华盖
YIMA  = {('申','子','辰'):'寅',('寅','午','戌'):'申',('亥','卯','未'):'巳',('巳','酉','丑'):'亥'}  # 驿马
TAOHUA= {('申','子','辰'):'酉',('寅','午','戌'):'卯',('亥','卯','未'):'子',('巳','酉','丑'):'午'}  # 桃花
# 劫煞,亡神
JIEWANG={('申','子','辰'):('巳','亥'),('寅','午','戌'):('亥','巳'),('亥','卯','未'):('申','寅'),('巳','酉','丑'):('寅','申')}
# [日干] → 定支
WENCHANG={'甲':'巳','乙':'午','丙':'申','丁':'酉','戊':'申','己':'酉','庚':'亥','辛':'子','壬':'寅','癸':'卯'}
TIANYI  ={'甲':'丑未','戊':'丑未','庚':'丑未','乙':'子申','己':'子申','丙':'亥酉','丁':'亥酉','辛':'寅午','壬':'卯巳','癸':'卯巳'}
GUOYIN  ={'甲':'戌','乙':'亥','丙':'丑','丁':'寅','戊':'丑','己':'寅','庚':'辰','辛':'巳','壬':'未','癸':'申'}
TAIJI   ={'甲':'子午','乙':'子午','丙':'卯酉','丁':'卯酉','戊':'辰戌丑未','己':'辰戌丑未','庚':'寅亥','辛':'寅亥','壬':'巳申','癸':'巳申'}
YANGREN ={'甲':'卯','乙':'寅','丙':'午','丁':'巳','戊':'午','己':'巳','庚':'酉','辛':'申','壬':'子','癸':'亥'}
# [年支三会方] → 孤辰,寡宿
SANHUI  ={'亥':('寅','戌'),'子':('寅','戌'),'丑':('寅','戌'),'寅':('巳','丑'),'卯':('巳','丑'),'辰':('巳','丑'),
          '巳':('申','辰'),'午':('申','辰'),'未':('申','辰'),'申':('亥','未'),'酉':('亥','未'),'戌':('亥','未')}

# 分类(将星属命格类,绝不入凶煞类)
POS_STARS = ['魁罡','将星','华盖','驿马','阴阳差错','文昌','天乙贵人','国印贵人','太极贵人','桃花']
BAD_STARS = ['羊刃','孤辰/寡宿','天罗地网','劫煞/亡神']
ALL_STARS = POS_STARS + BAD_STARS
CATEGORY  = {**{s:'命格类' for s in ['魁罡','将星','华盖','驿马','阴阳差错']},
             **{s:'贵人类' for s in ['文昌','天乙贵人','国印贵人','太极贵人']},
             '桃花':'人缘类', **{s:'凶煞类' for s in BAD_STARS}}

def _hits(branches, targets):
    out = []
    for t in targets:
        c = branches.count(t)
        if c: out.append((t, c))
    return out

def shensha(pillars):
    """→ dict: star -> list[(branch_label, count)]. Empty list = 无."""
    stems    = [p[0] for p in pillars]
    branches = [p[1] for p in pillars]
    ds       = stems[2]                 # 日干
    day_gz   = pillars[2][0] + pillars[2][1]   # 日柱 (stem+branch string)
    yb, db   = branches[0], branches[2] # 年支, 日支
    R = {}
    R['魁罡']      = [(day_gz,1)] if day_gz in KUIGANG else []
    R['将星']      = _hits(branches, list(dict.fromkeys([JIANG[_trine(yb)],  JIANG[_trine(db)]])))
    R['华盖']      = _hits(branches, list(dict.fromkeys([HUAGAI[_trine(yb)], HUAGAI[_trine(db)]])))
    R['驿马']      = _hits(branches, list(dict.fromkeys([YIMA[_trine(yb)],   YIMA[_trine(db)]])))
    R['阴阳差错']  = [('有',1)] if day_gz in YINYANG else []
    R['文昌']      = _hits(branches, [WENCHANG[ds]])
    R['天乙贵人']  = _hits(branches, list(TIANYI[ds]))
    R['国印贵人']  = _hits(branches, [GUOYIN[ds]])
    R['太极贵人']  = _hits(branches, list(TAIJI[ds]))
    R['桃花']      = _hits(branches, list(dict.fromkeys([TAOHUA[_trine(yb)], TAOHUA[_trine(db)]])))
    R['羊刃']      = _hits(branches, [YANGREN[ds]])
    gu, gua = SANHUI[yb]
    gw = []
    if branches.count(gu):  gw.append(('孤'+gu, branches.count(gu)))
    if branches.count(gua): gw.append(('寡'+gua, branches.count(gua)))
    R['孤辰/寡宿'] = gw
    tl = []
    if branches.count('戌'): tl.append(('天罗戌', branches.count('戌')))
    if branches.count('辰'): tl.append(('地网辰', branches.count('辰')))
    R['天罗地网'] = tl
    jie, wang = JIEWANG[_trine(yb)]
    jie2, wang2 = JIEWANG[_trine(db)]
    jw = []
    for t, nm in [(jie,'劫煞'),(wang,'亡神'),(jie2,'劫煞'),(wang2,'亡神')]:
        c = branches.count(t)
        if c and not any(x[0]==nm+t for x in jw): jw.append((nm+t, c))
    R['劫煞/亡神'] = jw
    return R

def total_count(ss):
    """命中神煞行数(每个神煞名计1行,无论单现/双现)。"""
    return sum(1 for s in ALL_STARS if ss[s])

# ─────────────────────────────────────────────────────────────
# 日柱 JDN 独立校验 (anchor: 1974-12-23 = 戊戌)
# ─────────────────────────────────────────────────────────────
def _jdn(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12*a - 3
    return d + (153*mm + 2)//5 + 365*yy + yy//4 - yy//100 + yy//400 - 32045

_ANCHOR_JDN = _jdn(1974, 12, 23)      # 戊戌 = 干支序34 (甲子=0)
_ANCHOR_IDX = 34
_OFFSET = (_ANCHOR_IDX - _ANCHOR_JDN) % 60

def day_pillar(y, m, d):
    """公历 → 日柱干支 (JDN 精确,与节气无关)。"""
    n = (_jdn(y, m, d) + _OFFSET) % 60
    return STEMS[n % 10] + BRANCHES[n % 12]

def validate_day_pillar(birth_ymd, expected_gz):
    """birth_ymd=(y,m,d). 返回 (ok, computed)."""
    got = day_pillar(*birth_ymd)
    return (got == expected_gz, got)

# ─────────────────────────────────────────────────────────────
# 高层 API
# ─────────────────────────────────────────────────────────────
def parse_pillars(s):
    """'甲寅 丙子 戊戌 己未' → [('甲','寅'),('丙','子'),('戊','戌'),('己','未')]"""
    toks = s.split()
    if len(toks) != 4 or any(len(t) != 2 for t in toks):
        raise ValueError(f"四柱格式应为 '年 月 日 时',各2字: {s!r}")
    return [(t[0], t[1]) for t in toks]

def analyze(pillars_str, birth=None):
    pillars = parse_pillars(pillars_str)
    dg = pillars[2][0]
    out = {'pillars': pillars, 'day_master': dg,
           'ten_gods': ten_gods(pillars), 'shensha': shensha(pillars)}
    out['total'] = total_count(out['shensha'])
    if birth:
        ok, got = validate_day_pillar(birth, ''.join(pillars[2]))
        out['day_pillar_check'] = {'ok': ok, 'expected': ''.join(pillars[2]), 'computed': got}
    return out

def fmt_shensha(ss):
    parts = []
    for s in ALL_STARS:
        hs = ss[s]
        if not hs: continue
        lbl = '·'.join(f"{t}{'×'+str(c) if c>1 else ''}" for t,c in hs)
        n = sum(c for _,c in hs)
        mark = '⚡' if CATEGORY[s]=='凶煞类' else ('✅✅' if n>=2 else '✅')
        parts.append(f"{s}{mark}{lbl}")
    return ' · '.join(parts)

def grid(people):
    """people = [(name, pillars_str), ...]. 打印十神矩阵 + 神煞矩阵(报告渲染的权威依据)。"""
    res = [(n, analyze(p)) for n, p in people]
    W = 11
    def hdr():
        return '十神\\人物   ' + ''.join(f"{n[:W]:<{W}}" for n,_ in res)
    print('\n【十神矩阵】(报告表格/正文须照此渲染,禁止手写)')
    print(hdr())
    for pos in ['年干','年支','月干','月支','日干','日支','时干','时支']:
        cells = []
        for _, r in res:
            ch, god = r['ten_gods'][pos]
            cells.append(f"{ch}{god}")
        print(f"{pos:<10}" + ''.join(f"{c:<{W}}" for c in cells))
    print(f"{'日主':<10}" + ''.join(f"{r['day_master']:<{W}}" for _,r in res))
    print('\n【神煞矩阵】 ✅有 ✅✅双现 ⚡凶煞 —无')
    print('神煞\\人物   ' + ''.join(f"{n[:W]:<{W}}" for n,_ in res))
    for s in ALL_STARS:
        cells = []
        for _, r in res:
            hs = r['shensha'][s]
            if not hs: cells.append('—')
            else:
                lbl = '·'.join(f"{t}{'×'+str(c) if c>1 else ''}" for t,c in hs)
                n = sum(c for _,c in hs)
                mark = '⚡' if CATEGORY[s]=='凶煞类' else ('✅✅' if n>=2 else '✅')
                cells.append(f"{mark}{lbl}")
        tag = f"{s}({CATEGORY[s][:2]})"
        print(f"{tag:<10}" + ''.join(f"{c:<{W}}" for c in cells))
    print(f"{'综合星数':<10}" + ''.join(f"{r['total']:<{W}}" for _,r in res))

def print_person(name, res):
    print(f"\n══ {name}  ({''.join(res['pillars'][2])}日)  神煞{res['total']}项 ══")
    if 'day_pillar_check' in res:
        c = res['day_pillar_check']
        print(f"  日柱JDN校验: {'OK' if c['ok'] else 'MISMATCH'} (expect {c['expected']} / computed {c['computed']})")
    tg = res['ten_gods']
    print("  十神:", ' '.join(f"{tg[p][0]}{tg[p][1]}" for p in ['年干','年支','月干','月支','日干','日支','时干','时支']))
    print("  神煞:", fmt_shensha(res['shensha']))

# ─────────────────────────────────────────────────────────────
# 回归测试夹具 (11 个已验证命盘 — 2026-06 人工核对)
# ─────────────────────────────────────────────────────────────
DAYPILLAR_FIXTURES = [   # (name, (y,m,d), expected_day_gz)
    ('Joyce',(1974,12,23),'戊戌'), ('Jeff',(1987,1,13),'壬戌'),
    ('Chelsea',(1973,2,17),'甲申'),('Iris',(1988,3,15),'己巳'),
    ('Cindy',(1984,10,25),'壬辰'),('Bill',(1977,4,23),'庚戌'),
]
# (name, pillars, expected_total, spot_checks{star: '无' or label-substring})
SHENSHA_FIXTURES = [
    ('Joyce','甲寅 丙子 戊戌 己未',5,{'魁罡':'戊戌','将星':'无','文昌':'无','国印贵人':'无','太极贵人':'戌','孤辰/寡宿':'无','天罗地网':'戌'}),
    ('Bill','丁巳 甲辰 庚戌 辛巳',6,{'魁罡':'庚戌','国印贵人':'辰','太极贵人':'无','孤辰/寡宿':'寡辰','劫煞/亡神':'亡'}),
    ('Jeff','丙寅 辛丑 壬戌 戊申',8,{'魁罡':'壬戌','文昌':'寅','太极贵人':'申','驿马':'申','孤辰/寡宿':'寡丑','天罗地网':'戌'}),
    ('Cindy','甲子 甲戌 壬辰 戊申',8,{'魁罡':'壬辰','将星':'子','国印贵人':'无','太极贵人':'申','羊刃':'子','天罗地网':'戌'}),
    ('Chelsea','癸丑 甲寅 甲申 壬申',5,{'魁罡':'无','华盖':'丑','驿马':'寅','天乙贵人':'丑','太极贵人':'无','劫煞/亡神':'劫'}),
    ('Iris','戊辰 乙卯 己巳 辛未',6,{'魁罡':'无','太极贵人':'辰','羊刃':'巳','孤辰/寡宿':'孤巳','天罗地网':'辰'}),
    ('Lucca','辛丑 庚子 庚戌 壬午',7,{'魁罡':'庚戌','将星':'午','文昌':'无','国印贵人':'无','天乙贵人':'丑','桃花':'午'}),
    ('Sisi','丙申 庚寅 辛未 癸巳',8,{'驿马':'寅','天乙贵人':'寅','国印贵人':'巳','太极贵人':'寅','羊刃':'申'}),
    ('KT','壬辰 丁未 癸未 癸丑',3,{'华盖':'未','孤辰/寡宿':'寡丑','天罗地网':'辰','文昌':'无','太极贵人':'无'}),
    ('Bo','甲子 丁丑 辛未 丁酉',4,{'将星':'子','华盖':'未','文昌':'子','桃花':'酉','魁罡':'无'}),
    ('超超','戊辰 丁巳 戊辰 丁巳',5,{'魁罡':'无','太极贵人':'辰','孤辰/寡宿':'孤巳','天罗地网':'辰','劫煞/亡神':'劫煞巳'}),
]

def selftest():
    fails = 0
    print("── 日柱 JDN 校验 ──")
    for name, ymd, exp in DAYPILLAR_FIXTURES:
        ok, got = validate_day_pillar(ymd, exp)
        print(f"  {name:9} {exp}  {'OK' if ok else 'FAIL('+got+')'}")
        fails += (not ok)
    print("── 神煞回归 ──")
    for name, pil, exp_total, spots in SHENSHA_FIXTURES:
        ss = shensha(parse_pillars(pil)); tot = total_count(ss)
        line = f"  {name:9} 神煞{tot}项"
        if tot != exp_total:
            line += f"  ✗ TOTAL expect {exp_total}"; fails += 1
        for star, want in spots.items():
            lbl = fmt_shensha(ss)
            present = bool(ss[star])
            hit_lbl = '·'.join(t for t,_ in ss[star])
            if want == '无':
                if present: line += f"  ✗ {star} 应为无却={hit_lbl}"; fails += 1
            else:
                if not present or want not in hit_lbl:
                    line += f"  ✗ {star} 应含'{want}' 实={hit_lbl or '无'}"; fails += 1
        print(line)
    print(f"\n{'✅ ALL PASS' if fails==0 else f'❌ {fails} FAILURE(S)'}")
    return fails == 0

# ─────────────────────────────────────────────────────────────
# CLI
# ─────────────────────────────────────────────────────────────
def main(argv):
    if not argv or argv[0] in ('-h','--help'):
        print(__doc__); return 0
    if argv[0] == '--selftest':
        return 0 if selftest() else 1
    if argv[0] == '--date':
        for spec in argv[1:]:
            name, date, *_ = spec.split(',')
            y,m,d = map(int, date.split('-'))
            print(f"{name}: {date} → 日柱 {day_pillar(y,m,d)}")
        return 0
    if argv[0] == '--grid':
        people = []
        for spec in argv[1:]:
            parts = [p.strip() for p in spec.split(',')]
            people.append((parts[0], parts[1]))
        grid(people)
        return 0
    # people: "Name,四柱[,YYYY-MM-DD]"
    for spec in argv:
        parts = [p.strip() for p in spec.split(',')]
        name, pil = parts[0], parts[1]
        birth = None
        if len(parts) >= 3 and re.match(r'\d{4}-\d{1,2}-\d{1,2}', parts[2]):
            birth = tuple(map(int, parts[2].split('-')))
        print_person(name, analyze(pil, birth))
    return 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
