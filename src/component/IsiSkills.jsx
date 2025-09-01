import BlurText from "../elements/BlurText";
import AnimatedContent from "../elements/AnimatedContent";
import PixelTransition from "../elements/PixelTransition";
import { SiReact, SiLaravel, SiDotnet, SiMysql } from "react-icons/si";
import Marquee from "react-fast-marquee";

const IsiSkills = () => {
  return (
    <div className="flex flex-col items-center">
      <BlurText
        text="Skill"
        delay={150}
        animateBy="words"
        direction="top"
        className="m-10 text-4xl md:text-5xl md:mb-20 font-bold text-white"
      />
      <div className="hidden md:block overflow-hidden w-full">
        <Marquee
          gradient={false}
          speed={60}
          autoFill={true}
          pauseOnHover={false}
          loop={0} // infinite
        >
          <div className="md:flex grid">
            <PixelTransition
              firstContent={
                <div className="flex items-center justify-center h-full">
                  <SiLaravel color="#FF2D20" size={100} />
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
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    Laravel
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              href=""
              className="mx-8"
            />
            <PixelTransition
              firstContent={
                <div className="flex items-center justify-center h-full">
                  <SiReact color="#61DAFB" size={100} />
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
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    React.Js
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              href=""
              className="mx-8"
            />

            <PixelTransition
              firstContent={
                <div className="flex items-center justify-center h-full">
                  <SiDotnet color="#512BD4" size={100} />
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
                  <a
                    style={{
                      fontWeight: 900,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    .NET
                  </a>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              href=""
              className="mx-8"
            />
            <PixelTransition
              firstContent={
                <div className="flex items-center justify-center h-full">
                  <SiMysql color="#4479A1" size={100} />
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
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    MySQL
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              href=""
              className="mx-8"
            />
          </div>
        </Marquee>
      </div>

      {/* Untuk sm ke bawah (opsional) tampilkan alternatif */}
      <div className="mb-0 md:hidden w-full justify-items-center justify-center items-center">
        <div className="grid grid-cols-1">
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
            className=""
          >
            <SiLaravel color="#FF2D20" size={120} className="m-10 " />
            <SiReact color="#61DAFB" size={120} className="m-10" />
            <SiDotnet color="#512BD4" size={120} className="m-10" />
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};
export default IsiSkills;
