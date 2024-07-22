import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-10">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              spareImg,
              titleClassName,
              imgClassName,
            },
            idx
          ) => (
            <BentoGridItem
              key={idx}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              spareImg={spareImg}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
