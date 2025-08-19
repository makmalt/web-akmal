import TextPressure from "../elements/TextPressure";
import Background from "./Background";
const Hero = () => {
  return (
    <div className="hidden md:justify-center md:flex flex-col min-h-screen items-center">
      <Background></Background>
      <div style={{ position: "relative", height: "300px" }}>
        <TextPressure
          text="Ahlan"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={250}
        />
      </div>
    </div>
  );
};
export default Hero;
