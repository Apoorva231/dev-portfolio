import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PhotographyGallery from './pages/PhotographyGallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<PhotographyGallery />} />
    </Routes>
  );
}

export default App;
