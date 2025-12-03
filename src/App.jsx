import { useEffect, useState } from "react";

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
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight; // Hero = full screen
      const scrollY = window.scrollY;

      // Scroll lewat Hero -> Navbar muncul
      if (scrollY > heroHeight - 80) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarComponent visible={showNavbar} />

      <Hero />

      <div className="relative min-h-screen">
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

        <div id="about" className="md:mt-2 md:min-h-screen">
          <IsiBio />
          <Milestones />
        </div>

        <div id="portfolio" className="md:mt-0 lg:mt-0 min-h-screen">
          <Project />
        </div>

        <div id="skills" className="md:mt-10 lg:mt-0 min-h-auto mb-20">
          <IsiSkills />
        </div>

        <div id="contact" className="md:mt-10 lg:mt-0 min-h-auto mb-5">
          <Contact />
        </div>

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
