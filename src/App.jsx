import Hero from "./component/Hero";
import IsiBio from "./component/IsiBio";
import Isi from "./component/IsiProject";
import NavbarComponent from "./component/NavbarComponent";
import FooterComponent from "./component/FooterComponent";
function App() {
  return (
    <>
      <Hero></Hero>
      <NavbarComponent />
      <div id="home" className="mt-2 min-h-screen">
        <IsiBio></IsiBio>
      </div>
      <div id="skills" className="mt-10 lg:mt-0 min-h-screen">
        <Isi />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
