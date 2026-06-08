import { useStore } from '../state/store';

const REPORTS = [
  {
    icon: '🌙',
    title: '个人命理报告',
    desc: '八字·MBTI·星盘·紫微 四系统综合',
    seed: '我想做一个个人四系统命理报告',
    accent: 'var(--personal)',
  },
  {
    icon: '🌿',
    title: '家族命理报告',
    desc: '家庭成员合盘·亲子·五行关系',
    seed: '我想做一个家族命理分析报告',
    accent: 'var(--family)',
  },
  {
    icon: '⚡',
    title: 'AI时代孩子报告',
    desc: '天赋·兴趣·AI时代发展规划',
    seed: '我想做一个AI时代孩子发展规划报告',
    accent: 'var(--child)',
  },
  {
    icon: '⚖️',
    title: '事业合伙人报告',
    desc: '合伙相性·五行化学·运势窗口·分工',
    seed: '我想做一个事业合伙人深度相性报告',
    accent: 'var(--business)',
  },
  {
    icon: '✦',
    title: '多人各做个人报告',
    desc: '为每个人分别生成个人四系统命理',
    seed: '我想给多个人分别做个人命理报告，每个人一份',
    accent: 'var(--multi)',
  },
];

export function Sidebar() {
  const send = useStore((s) => s.send);
  const newChat = useStore((s) => s.newChat);
  const order = useStore((s) => s.order);
  const sessions = useStore((s) => s.sessions);
  const activeId = useStore((s) => s.activeId);
  const selectChat = useStore((s) => s.selectChat);
  const busy = useStore((s) => s.busy);

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">🧭</div>
        <div>
          <div className="brand-name">路卡命运罗盘</div>
          <div className="brand-sub">LucaPath Studio</div>
        </div>
      </div>

      <button className="new-chat" disabled={busy} onClick={() => newChat()}>
        ＋ 新对话
      </button>

      <div className="side-label">选择报告类型</div>
      {REPORTS.map((r) => (
        <button
          key={r.title}
          className="report-card"
          disabled={busy}
          onClick={() => send(r.seed, { newChat: true })}
        >
          <span className="rc-icon" style={{ color: r.accent }}>
            {r.icon}
          </span>
          <span>
            <span className="rc-title">{r.title}</span>
            <span className="rc-desc" style={{ display: 'block' }}>
              {r.desc}
            </span>
          </span>
        </button>
      ))}

      {order.length > 0 && <div className="side-label">最近对话</div>}
      {order.map((lid) => {
        const s = sessions[lid];
        if (!s) return null;
        return (
          <button
            key={lid}
            className={`recent-item${lid === activeId ? ' active' : ''}`}
            onClick={() => selectChat(lid)}
          >
            <span className="recent-dot" style={{ background: s.accent }} />
            {s.title || '新对话'}
          </button>
        );
      })}

      <div className="sidebar-footer">三才 SĀNCÁI · 本地订阅运行 · 2026</div>
    </aside>
  );
}
