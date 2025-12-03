import { BackgroundLines } from "../components/ui/background-lines";

export default function Hero() {
  return (
    <BackgroundLines
      className="min-h-screen flex items-center justify-center w-full flex-col px-4 pt-24 pb-16 md:pt-32 md:pb-24"
      svgOptions={{ duration: 8 }}
    >
      <h2
        className="
        bg-clip-text text-transparent text-center
        bg-gradient-to-b from-neutral-600 to-white
        text-3xl sm:text-4xl md:text-5xl lg:text-7xl
        font-sans font-bold tracking-tight
        leading-tight
        relative z-20
      "
      >
        Akmal's, <br /> Portfolio Web.
      </h2>

      <p className="max-w-sm sm:max-w-md mx-auto mt-4 text-xs sm:text-sm md:text-lg text-neutral-400 text-center px-2">
        Welcome to my portfolio website! This is my personal website, hope you
        enjoy it.
      </p>
    </BackgroundLines>
  );
}
