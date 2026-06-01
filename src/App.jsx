import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JourneyMap from './pages/JourneyMap';
import JourneyDetail from './pages/JourneyDetail';
import MemoryMailbox from './pages/MemoryMailbox';
import Quiz from './pages/Quiz';
import Notebook from './pages/Notebook';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<JourneyMap />} />
        <Route path="/detail" element={<JourneyDetail />} />
        <Route path="/mailbox" element={<MemoryMailbox />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/notebook" element={<Notebook />} />
      </Routes>
    </div>
  );
}

export default App;
