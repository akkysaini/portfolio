import React from "react";
import { FaWordpress } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


// For Navbar menus

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation and Learnings",
    location: "",
    description:
      "During graduation I worked as a freelancer and delivered many websites based on wordpress.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer Intern",
    location: "CareerGuide.com",
    description:
      "In my internship at careerguide.com as a frontend developer, I elevated their own website UI and gained more experience in wordpress and php.",
    icon: React.createElement(FaWordpress),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Brandent",
    description:
      "After internship transitioning into a full-time role at Brandent. I have successfully developed and delivered numerous websites, including ecommerce platforms utilizing Wordpress and Shopify. I am open to full-time opportunities.",
    icon: React.createElement(RiJavascriptFill),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Wordpress",
  "Elementor",
  "Shopify",
] as const;