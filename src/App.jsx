import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Banners } from "./Pages/Banners/Banners";
import CTA from "./Pages/CTASections/CTA";
import { Home } from "./Pages/Home/Home";
import TeamSections from "./Pages/TailwindCSSTeamSections/TeamSections";

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
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
