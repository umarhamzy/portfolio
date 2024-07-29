import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div id="testimonials" className="scroll-mt-10 py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-12">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />
      </div>
    </div>
  );
};

export default Testimonials;
