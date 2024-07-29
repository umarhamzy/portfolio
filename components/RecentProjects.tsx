import { projects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./3DCardDemo";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 scroll-mt-10">
      <h1 className="heading">
        A small selection of recent{" "}
        <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-14 mt-12">
        {projects.map(({ id, title, desc, img, iconLists, link }) => (
          <ThreeDCardDemo
            key={id}
            id={id}
            title={title}
            desc={desc}
            img={img}
            iconLists={iconLists}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
