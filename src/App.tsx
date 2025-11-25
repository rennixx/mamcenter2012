import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComponentShowcase from './pages/ComponentShowcase';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<ComponentShowcase />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
