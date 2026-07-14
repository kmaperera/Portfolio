import Navbar from "./components/layout/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Button from "./components/ui/Button";
import ScrollToTopButton from "./components/ui/ScrollToTopButton"

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;