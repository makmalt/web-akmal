import SplitText from "../elements/SplitText";
import DecryptedText from "../elements/DecryptedText";

const IsiBio = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen mt-64">
      <div className="columns-2 flex flex-col mx-20">
        <SplitText
          text="Mochammad Akmal Thoriq"
          className="text-4xl text-white font-bold pb-5 self-start"
          delay={130}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
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
        <a href="http://">Download CV</a>
      </div>
      <div className="text-white text-2xl justify-center">Hai</div>
    </div>
  );
};
export default IsiBio;
