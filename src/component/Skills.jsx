import SplitText from "gsap-trial/SplitText"

const Skills = () => {
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
      </div>
      <div className="text-white text-2xl justify-center">Hai</div>
    </div>
    )
}
export default Skills