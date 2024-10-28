<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Banners } from "./Pages/Banners/Banners";
import CTA from "./Pages/CTASections/CTA";
import { Home } from "./Pages/Home/Home";
import TeamSections from "./Pages/TailwindCSSTeamSections/TeamSections";
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Banners } from './Pages/Banners/Banners';
import CTA from './Pages/CTASections/CTA';
import TeamSections from './Pages/TailwindCSSTeamSections/TeamSections';
import NotFound from './Pages/NotFound/NotFound';
>>>>>>> d63c13239eb825e7778eb14843bbf01041077032

function App() {
  return (
    <Router>
      <div className="p-6">
        <header className="text-center my-6">
          <h3 className=" inline-block rounded border border-current px-8 py-3 md:text-4xl text-3xl font-medium text-red-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 ">
            Tailwind CSS Projects
          </h3>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banners" element={<Banners />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/team" element={<TeamSections />} />
        <Route path="*" element={<NotFound />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
