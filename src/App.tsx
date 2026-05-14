import { Routes, Route } from 'react-router-dom';
import SimpleApp from './SimpleApp';
import SistemaGestaoTempoPage from './pages/projects/SistemaGestaoTempo';
import FungiFreshPage from './pages/projects/FungiFresh';
import VendinhaPage from './pages/projects/Vendinha';
import AtaFacilPage from './pages/projects/AtaFacil';
import StagiumPage from './pages/projects/Stagium';
import MammyPayPage from './pages/projects/MammyPay';
import FluxoDiaPage from './pages/projects/FluxoDia';
import FoliumPage from './pages/projects/Folium';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SimpleApp />} />
      <Route path="/projetos/sistema-gestao-tempo" element={<SistemaGestaoTempoPage />} />
      <Route path="/projetos/fungifresh" element={<FungiFreshPage />} />
      <Route path="/projetos/vendinha" element={<VendinhaPage />} />
      <Route path="/projetos/atafacil" element={<AtaFacilPage />} />
      <Route path="/projetos/stagium" element={<StagiumPage />} />
      <Route path="/projetos/mammypay" element={<MammyPayPage />} />
      <Route path="/projetos/fluxodia" element={<FluxoDiaPage />} />
      <Route path="/projetos/folium" element={<FoliumPage />} />
    </Routes>
  );
}

export default App;
