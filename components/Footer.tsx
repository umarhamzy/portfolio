import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-10 pb-20 pt-12 w-full">
      <div className="absolute bottom-0 left-0">
        <img
          src="/footer-grid.svg"
          alt="grid background for footer"
          className="w-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-white-200 mt-10 text-center">
          Reach out to me and lets discuss how I can help you achieve your
          goals.
        </p>
        <a href="mailto:umar.hamzy@outlook.com">
          <MagicButton
            text="Let's get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex items-center justify-center md:flex-row flex-col mt-12 gap-3">
        <p className="text-sm md:font-normal font-light text-white-100">
          &copy; 2024 Umar Hamzy
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={item.img} alt="author's social media" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
