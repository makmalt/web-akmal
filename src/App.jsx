import Hero from "./component/Hero";
import IsiBio from "./component/IsiBio";
import Milestones from "./component/Milestone";
import IsiSkills from "./component/IsiSkills";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
import Project from "./component/Project";
function App() {
  return (
    <>
      <Hero></Hero>
      <NavbarComponent />
      <div id="about" className="md:mt-2 md:min-h-screen">
        <IsiBio></IsiBio>
      </div>
      <Milestones></Milestones>
      <div id="portfolio" className="md:mt-0 lg:mt-0 min-h-screen">
        <Project />
      </div>
      <div id="skills" className="md:mt-10 lg:mt-0 min-h-auto mb-5">
        <IsiSkills />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
