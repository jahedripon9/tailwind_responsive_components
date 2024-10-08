import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Banners } from './Pages/Banners/Banners';
import CTA from './Pages/CTASections/CTA';
import TeamSections from './Pages/TailwindCSSTeamSections/TeamSections';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/team" element={<TeamSections />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
