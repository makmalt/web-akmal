import CardsProject from "../elements/CardsProject";
import BlurText from "../elements/BlurText";
import AnimatedContent from "../elements/AnimatedContent";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    //fetching data from an API
    const fetchProjects = async () => {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <BlurText
        text="Portfolio"
        delay={150}
        animateBy="words"
        direction="top"
        className="m-10 text-4xl md:text-5xl md:mb-20 font-bold text-white text-center items-center justify-center flex"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <AnimatedContent
            key={project.id}
            distance={200}
            reverse={false}
            direction={"vertical"}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0}
          >
            <CardsProject
              title={project.title}
              description={project.description}
              image={project.image}
              techstack={project.techstack}
              link={project.link}
            />
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default Project;
