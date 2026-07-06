import Navbar from "./components/layout/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;