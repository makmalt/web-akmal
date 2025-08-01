import SplitText from "../elements/SplitText";
import DecryptedText from "../elements/DecryptedText";
import TiltedCard from "../elements/TiltedCard";
import AnimatedContent from "../elements/AnimatedContent";
import TextType from "../elements/TextType";

const IsiBio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center justify-center">
      <div className="columns-2 flex flex-col mx-20">
        <TextType
          text={["Mochammad Akmal Thoriq", "Akmal"]}
          className="text-4xl text-white font-bold pb-5 self-start"
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          deletingSpeed={60}
          cursorCharacter="|"
        />
        <DecryptedText
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, maiores quo perferendis nesciunt deserunt esse laudantium! Error, suscipit. Non velit sunt voluptatem, animi fugit a sapiente aliquid. Veniam, ipsam debitis."
          speed={10}
          maxIterations={30}
          characters="ABCD1234!?"
          className="revealed text-white text-2xl text-start text-wrap max-w-2xl"
          parentClassName="all-letters"
          encryptedClassName="encrypted text-white"
          decryptingClassName="text-white text-2xl"
          animateOn="view"
          revealDirection="start"
          sequential="true"
        />
        <a className="link text-2xl mt-10 mb-10 lg:mb-0">Download CV</a>
      </div>
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
  );
};
export default IsiBio;
