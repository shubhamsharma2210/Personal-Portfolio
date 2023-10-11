import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/containers/home";
import About from "./components/containers/about";
import Resume from "./components/containers/resume";
import Skills from "./components/containers/skills";
import Contact from "./components/containers/contact";
import Portfolio from "./components/containers/portfolio";
import Navbar from "./components/navbar";
import particles from "./components/util.js/particles";
function App() {
  const location = useLocation();
  console.log(location);

  const renderParticlesInHomePage = location.pathname == "/";
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {/* particles */}
      {renderParticlesInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
