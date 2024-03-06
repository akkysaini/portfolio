"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
    //   ref={ref}
      className=" max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        After completing graduation in<span className="font-medium"> B.A</span>, I decided to pursue my
        passion for programming. I enrolled in a coding course and learned
        <span className="font-medium"> frontend web development</span>.
        <span className="italic"> My favorite part of coding</span> is creating a responsive and visually stunning website. I <span className="underline">love</span> the
        feeling of figuring out a solution to the errors in a website. My core skills are<span className="font-medium"> HTML, CSS, JavaScript and Wordpress</span>
        . I am also familiar with <span className="font-medium"> React, Next.js </span>and othe<span className="italic"> CSS frameworks </span>like<span className="font-medium"> Tailwind CSS </span>and<span className="font-medium"> Bootstrap</span>. I am currently looking for a<span className="font-medium"> full-time position </span>as a frontend
        developer.
      </p>
      <p className="mb-3 text-justify">
      My journey in the world of web development has been one of continuous<span className="italic"> learning and growth</span>, and I am always excited to take on new challenges. As you<span className="font-medium"> explore my portfolio</span>, you'll find a showcase of projects that highlight my expertise. I take pride in delivering projects that not only meet client expectations but also exceed them. Let's collaborate and bring your digital vision to life with innovation and precision. Thank you for visiting !
      </p>
    </motion.section>
  );
}