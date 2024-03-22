"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/lib/data";
// import { link } from "fs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      className="group lg:w-[32%] sm:w-[48%] w-[100%] rounded dark:border-gray-500 border-[4px] border-gray-300 mb-12 sm:mb-16"
      style={{
        scale: scaleProgress,
        // opacity: opacityProgress,
      }}
      ref={ref}
    >
      <div className="   relative h-[18rem] sm:h-[22rem] cursor-pointer flex justify-center">
        {/* ======================image============== */}

        <div className="w-[100%] h-[100%] overflow-hidden">
          <Image
            className=" transition ease-in-out duration-700 object-cover  group-hover:bottom-0 z-0 "
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
          />
        </div>

        {/* ======================Description============== */}

        <div className="p-4 w-[80%] flex flex-col items-center rounded z-[2] justify-center gap-2  absolute -bottom-[20%] bg-gray-200 dark:bg-gray-600">
          <h3 className="text-xl">{title}</h3>
          <ul className="flex flex-wrap items-center justify-center mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-500 px-3 py-1 text-[0.6rem] capitalize tracking-[2px] text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <a
            href={link}
            target="_blank"
            className="bg-gray-700 dark:bg-gray-100  text-white dark:text-gray-900 hover:bg-gray-950 px-4 py-2 tracking-[2px] text-[0.7rem] rounded-full outline-none hover:scale-110 transition cursor-pointer"
          >
            View Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}
