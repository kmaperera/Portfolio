import Navbar from "./components/layout/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;