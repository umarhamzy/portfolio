"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Props {
  id: number;
  title: string;
  desc: string;
  img: string;
  iconLists: string[];
  link: string;
}
export function ThreeDCardDemo({
  id,
  title,
  desc,
  img,
  iconLists,
  link,
}: Props) {
  return (
    <CardContainer>
      <CardBody className="relative group/card  dark:border-violet-400/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border xl:w-[32rem]">
        <CardItem
          as="h3"
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="30"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="10" className="w-full mt-4 absolute h-full -z-10">
          <div className="">
            <img
              src="/bg.png"
              alt="background-image"
              className="rounded-xl object-contain w-full h-full"
            />
          </div>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <img
            src={img}
            // height="1000"
            // width="1000"
            className="h-60 w-full object-contain rounded-xl"
            alt="project thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {/* TODO: Use animated Tooltips */}
          <CardItem translateZ={10} className="py-2 rounded-full flex">
            {iconLists.map((icon, index) => (
              <div
                key={icon}
                className="border border-white/20 rounded-full dark:bg-[#161932] lg:w-10 lg:h-10 w-8 h-8 flex justify-center icons-center"
                style={{
                  transform: `translateX(-${3 * index * 2}px)`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt="tag" className="p-2" />
              </div>
            ))}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="_blank"
            className="py-2 rounded-lg text-xs font-normal dark:text-blue-100 dark:bg-[#161932] w-24 text-center hover:text-sm transition-all duration-200 tracking-wider uppercase"
          >
            Visit →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
