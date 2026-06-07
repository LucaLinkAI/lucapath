import { useStore } from './state/store';
import { Landing } from './screens/Landing';
import { Studio } from './screens/Studio';

export function App() {
  const entered = useStore((s) => s.entered);
  return entered ? <Studio /> : <Landing />;
}
