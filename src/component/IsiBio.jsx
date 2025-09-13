import TiltedCard from "../elements/TiltedCard";
import AnimatedContent from "../elements/AnimatedContent";
import TextType from "../elements/TextType";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const IsiBio = () => {
  return (
    <div className="grid grid-cols-1 min-h-screen items-center justify-center">
      {/* Untuk md ke atas tampilkan konten utama */}
      <div className="hidden md:block">
        <AnimatedContent
          distance={200}
          reverse={false}
          direction={"horizontal"}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0}
        >
          <div className="flex items-baseline justify-center">
            <TiltedCard
              imageSrc="fotobio.jpg"
              altText=" Foto bio"
              captionText="Foto Akmal"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </AnimatedContent>
      </div>

      {/* Konten hape */}
      <div className="block md:hidden">
        <AnimatedContent
          distance={200}
          reverse={false}
          direction={"horizontal"}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0}
        >
          <div className="flex items-baseline justify-center">
            <TiltedCard
              imageSrc="fotobio.jpg"
              altText=" Foto bio"
              captionText="Foto Akmal"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </AnimatedContent>
      </div>

      <div className="flex flex-col mx-20">
        <TextType
          text={["Mochammad Akmal Thoriq", "Akmal"]}
          className="text-4xl text-white font-bold pb-5 justify-center text-center"
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          deletingSpeed={60}
          cursorCharacter="|"
        />
        <div className="mx-auto md:w-4xl text-justify">
          <AnimatedContent
            distance={200}
            reverse={false}
            direction={"vertical"}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={4}
          >
            <div className="text-white dark:text-white text-wrap text-xl">
              <p>
                Hi, Iam a fresh graduate in Informatics Engineering from
                Brawijaya University with experience and strong interest in
                software development, both as front-end and back-end developer,
                especially has a very high enthusiasm for front-end development.
                Have 2+ year experience in developing web application. Enjoys
                learning things, such as learning new programming languages and
                frameworks.
              </p>
            </div>
          </AnimatedContent>
          <br />
          <br />
          <br />
          <div className="flex gap-10">
            <a
              className="text-white dark:text-white link text-2xl lg:mb-0"
              href="Cv.pdf"
              download
            >
              Download CV
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="w-7 h-7 mt-1"></BsGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/mochammad-akmal-thoriq/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="w-7 h-7 mt-1"></BsLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IsiBio;
