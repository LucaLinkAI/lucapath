import { Sidebar } from '../components/Sidebar';
import { ChatPanel } from '../components/ChatPanel';
import { ArtifactPanel } from '../components/ArtifactPanel';

export function Studio() {
  return (
    <div className="studio">
      <Sidebar />
      <ChatPanel />
      <ArtifactPanel />
    </div>
  );
}
