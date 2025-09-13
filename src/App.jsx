import Hero from "./component/Hero";
import IsiBio from "./component/IsiBio";
import Milestones from "./component/Milestone";
import IsiSkills from "./component/IsiSkills";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Particles from "./elements/Particles";
function App() {
  return (
    <>
      <Hero />
      <NavbarComponent />
      <div className="relative min-h-screen">
        {/* Particles background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={800}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Konten setelah Hero */}
        <div id="about" className="md:mt-2 md:min-h-screen">
          <IsiBio />
        </div>
        <Milestones />
        <div id="portfolio" className="md:mt-0 lg:mt-0 min-h-screen">
          <Project />
        </div>
        <div id="skills" className="md:mt-10 lg:mt-0 min-h-auto mb-5">
          <IsiSkills />
        </div>
        <div id="contact" className="md:mt-10 lg:mt-0 min-h-auto mb-5">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
