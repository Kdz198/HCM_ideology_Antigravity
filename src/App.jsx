import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JourneyDetail from './pages/JourneyDetail';
import MemoryMailbox from './pages/MemoryMailbox';
import Quiz from './pages/Quiz';
import GlobeMap from './pages/GlobeMap';
import DarkModeToggle from './DarkModeToggle';

function App() {
  return (
    <div className="min-h-screen bg-background relative">
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<GlobeMap />} />
        <Route path="/detail" element={<JourneyDetail />} />
        <Route path="/mailbox" element={<MemoryMailbox />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
