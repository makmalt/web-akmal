import BlurText from "../elements/BlurText";
import AnimatedContent from "../elements/AnimatedContent";
import PixelTransition from "../elements/PixelTransition";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const iconMap = {
  Laravel: <Icon icon="logos:laravel" color="#FF2D20" className="w-20 h-20" />,
  React: <Icon icon="logos:react" color="#61DAFB" className="w-20 h-20" />,
  ".NET": <Icon icon="logos:dotnet" color="#512BD4" className="w-20 h-20" />,
  MySQL: <Icon icon="logos:mysql" color="#4479A1" className="w-20 h-20" />,
  Bootstrap: (
    <Icon icon="logos:bootstrap" color="#7952B3" className="w-20 h-20" />
  ),
  Astro: <Icon icon="logos:astro-icon" color="#000000" className="w-20 h-20" />,
  Alpine: (
    <Icon icon="logos:alpinejs-icon" color="#000000" className="w-20 h-20" />
  ),
  SqlServer: (
    <Icon icon="logos:microsoft-icon" color="#000000" className="w-20 h-20" />
  ),
  Flutter: <Icon icon="logos:flutter" color="#000000" className="w-20 h-20" />,
  Kotlin: (
    <Icon icon="logos:kotlin-icon" color="#000000" className="w-20 h-20" />
  ),
  Firebase: (
    <Icon icon="logos:firebase-icon" color="#000000" className="w-20 h-20" />
  ),
  Next: <Icon icon="logos:nextjs-icon" color="#000000" className="w-20 h-20" />,
  Tailwind: (
    <Icon icon="logos:tailwindcss-icon" color="#000000" className="w-20 h-20" />
  ),
};

const iconMap2 = {
  Laravel: <Icon icon="logos:laravel" color="#FF2D20" className="w-13 h-13" />,
  React: <Icon icon="logos:react" color="#61DAFB" className="w-13 h-13" />,
  ".NET": <Icon icon="logos:dotnet" color="#512BD4" className="w-13 h-13" />,
  MySQL: <Icon icon="logos:mysql" color="#4479A1" className="w-13 h-13" />,
  Bootstrap: (
    <Icon icon="logos:bootstrap" color="#7952B3" className="w-13 h-13" />
  ),
  Astro: <Icon icon="logos:astro-icon" color="#000000" className="w-13 h-13" />,
  Alpine: (
    <Icon icon="logos:alpinejs-icon" color="#000000" className="w-13 h-13" />
  ),
  SqlServer: (
    <Icon icon="logos:microsoft-icon" color="#000000" className="w-13 h-13" />
  ),
  Flutter: <Icon icon="logos:flutter" color="#000000" className="w-13 h-13" />,
  Kotlin: (
    <Icon icon="logos:kotlin-icon" color="#000000" className="w-13 h-13" />
  ),
  Firebase: (
    <Icon icon="logos:firebase-icon" color="#000000" className="w-13 h-13" />
  ),
  Next: <Icon icon="logos:nextjs-icon" color="#000000" className="w-13 h-13" />,
  Tailwind: (
    <Icon icon="logos:tailwindcss-icon" color="#000000" className="w-13 h-13" />
  ),
};

const IsiSkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/skills.json");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);
  return (
    <>
      {" "}
      <div className="flex flex-col items-center">
        <BlurText
          text="Skills"
          delay={150}
          animateBy="words"
          direction="top"
          className="mt-10 text-4xl md:text-5xl font-bold text-white"
        />
        <h2 className="p-10 md:p-0 text-slate-300 text-md md:mb-20 mb-5">
          Here are some of the technologies I have learned and used in my
          projects.
        </h2>

        <div className="hidden md:flex flex-wrap m-10 gap-10 justify-center">
          {skills.map((skill) => (
            <PixelTransition
              key={skill.id}
              firstContent={
                <div className="flex items-center justify-center h-full">
                  {iconMap[skill.name] || null}
                </div>
              }
              secondContent={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#ffffff",
                    }}
                  >
                    {skill.title}
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              href=""
              className="mx-8"
            />
          ))}
        </div>

        {/* Untuk sm ke bawah (opsional) tampilkan alternatif */}
      </div>
      <div className="mb-6 md:hidden w-full max-w-md mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 place-items-center">
          <AnimatedContent
            distance={100}
            reverse={false}
            direction={"horizontal"}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0}
            className="items-center justify-center"
          ></AnimatedContent>
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center justify-center">
              {iconMap2[skill.name] || null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default IsiSkills;
