import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-[97vh] place-content-center antialiased">
      <div>
        <Spotlight className="top-0 left-0 h-screen" fill="lavender" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.1] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences!"
            className="text-[40px] md:text-5xl lg:text-6xl text-center"
          />
          <h4 className="opacity-80 mb-4 tracking-wide text-sm md:text-lg lg:text-2xl text-center">
            Greetings! I&apos;m Umar. A well-versed{" "}
            <FlipWords
              words={["Frontend", "Backend", "Fullstack"]}
              duration={5000}
            />
            <span>Developer.</span>
          </h4>
          <a href="#projects">
            <MagicButton
              text="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
