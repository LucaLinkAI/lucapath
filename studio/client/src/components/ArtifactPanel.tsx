import { useStore } from '../state/store';

export function ArtifactPanel() {
  const current = useStore((s) => s.current());
  const setActiveArtifact = useStore((s) => s.setActiveArtifact);

  const artifacts = current?.artifacts ?? [];
  const active =
    artifacts.find((a) => a.file === current?.activeArtifact) ?? artifacts[artifacts.length - 1];

  if (!active) {
    return (
      <aside className="artifact">
        <div className="artifact-head">
          <span className="artifact-accent" style={{ background: 'var(--w2)' }} />
          <span className="artifact-name" style={{ color: 'var(--w4)' }}>
            报告预览
          </span>
        </div>
        <div className="artifact-empty">
          <div className="glyph">🧭</div>
          <div className="et">报告将在这里出现</div>
          <div className="es">
            完成左侧的信息收集后，生成的命理报告会在此实时预览，右上角可一键下载 HTML。
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="artifact">
      <div className="artifact-head">
        <span className="artifact-accent" style={{ background: active.accent }} />
        <span className="artifact-name" title={active.file}>
          {active.file}
        </span>
        <a className="download-btn" href={`${active.url}?download=1`} download={active.file}>
          ⤓ 下载
        </a>
      </div>

      {artifacts.length > 1 && (
        <div className="artifact-tabs">
          {artifacts.map((a) => (
            <button
              key={a.file}
              className={`artifact-tab${a.file === active.file ? ' active' : ''}`}
              title={a.file}
              onClick={() => setActiveArtifact(a.file)}
            >
              {a.file}
            </button>
          ))}
        </div>
      )}

      <iframe
        className="artifact-frame"
        src={active.url}
        title={active.file}
        sandbox="allow-same-origin allow-scripts allow-popups allow-downloads"
        key={active.url}
      />
    </aside>
  );
}
