import { BackgroundLines } from "../components/ui/background-lines";

export default function Hero() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4" svgOptions={{duration: 8}}>
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Akmal's, <br /> Portfolio Web.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
        Welcome to my portfolio website! This is my personal website, hope you
        enjoy it.
      </p>
    </BackgroundLines>
  );
}
