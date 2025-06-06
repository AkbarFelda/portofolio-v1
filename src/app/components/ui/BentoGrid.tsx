"use client";
import { useState } from "react";
import { IoCopyOutline, IoLogoInstagram } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "../unused/GradientBento";
import GridGlobe from "./GridGlobe";
import animationData from "@/app/data/confetti.json";
import MagicButton from "./MagicButton";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto max-w-[88rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Flutter", "Typescript"];
  const rightLists = ["Kotlin", "NextJS", "Laravel"];

  const [copied, setCopied] = useState(false);
  const [click, clicked] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleInstagram = () => {
    const url = "https://www.instagram.com/muhammadakbarfelda/";
    window.open(url, "_blank");
    clicked(true);
  };

  const handleCopy = () => {
    const text = "muhammadakbarfelda@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
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
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-400 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 text-white"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute right-0 top-1/2 -translate-y-1/2 -translate-x-3">
              <div className="flex flex-col gap-1 md:gap-1 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
          lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-2 lg:px-2 py-2 px-2  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-1 md:gap-1 lg:gap-4">
                <span className="lg:py-2 lg:px-2 py-2 px-2  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-2 py-1 px-2 text-xs lg:text-sm opacity-50 
          lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="flex flex-row gap-2 lg:gap-4 items-center justify-center">
                <MagicButton
                  title="Instagram"
                  icon={<IoLogoInstagram />}
                  position="left"
                  handleClick={handleInstagram}
                  otherClasses="!bg-[#161A31]"
                />
                <MagicButton
                  title={copied ? "Email Copied!" : "Copy Email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
