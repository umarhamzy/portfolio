/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { LuClipboard } from "react-icons/lu";
import { LuClipboardCheck } from "react-icons/lu";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto mb-28",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  spareImg,
  titleClassName,
  imgClassName,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("umar.hamzy@outlook.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 7000);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/10",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              className={cn("object-center object-cover", imgClassName)}
              alt={"card image"}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              className={cn("object-center object-cover", imgClassName)}
              alt={"card image"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 items-center justify-center text-white font-bold"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            titleClassName
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-4 mt-5">
                {["React", "Next.js", "TypeScript"].map((item) => (
                  <span
                    className="py-2.5 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
                <span
                  className="py-4 px-3
                 rounded-lg text-center bg-[#10132E]"
                />
              </div>
              <div className="flex flex-col gap-3 lg:gap-4">
                <span
                  className="py-4 px-3
                 rounded-lg text-center bg-[#10132E]"
                />
                {["JavaScript", "MongoDB", "Tailwind"].map((item) => (
                  <span
                    className="py-2.5 px-3 text-xs opacity-50 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                text={copied ? "Copied!" : "Copy my email"}
                icon={copied ? <LuClipboardCheck /> : <LuClipboard />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
