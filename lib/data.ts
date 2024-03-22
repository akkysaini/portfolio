import React from "react";
import { FaWordpress } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import cyberzipImg from "@/public/cyberzip.png";
import peachfloresImg from "@/public/peachflores.webp"
import gargeeImg from "@/public/gargee.webp"
import ekalblspImg from "@/public/ekalblsp.webp"
import abrosImg from "@/public/abros.webp"
import ninobambinoImg from "@/public/ninobambino.webp"
import offbaseImg from "@/public/offbase.webp"
import mehromaahImg from "@/public/mehromaah.webp"
import evarherbsImg from "@/public/evaraherbs.webp"
import pnamImg from "@/public/pnam.webp"
import sqftImg from "@/public/21sqft.webp"
import kaanchImg from "@/public/kaanch.webp"
import growmoneyImg from "@/public/growmoney.webp"
import amourImg from "@/public/amour.webp"
import bluesparrowImg from "@/public/bluesparrow.webp"


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
    title: "Peach Flores",
    tags: ["Shopify"],
    imageUrl: peachfloresImg,
    link: "https://peachflores.com/"
  },
  {
    title: "Gargee Designer's",
    tags: ["Shopify"],
    imageUrl: gargeeImg,
    link: "https://gargee.com/"
  },
  {
    title: "CyberZip",
    tags: ["Wordpress"],
    imageUrl: cyberzipImg,
    link: "https://cyberzip.in/"
  },
  
  {
    title: "Ekal BLSP",
    tags: ["Wordpress"],
    imageUrl: ekalblspImg,
    link: "https://ekalblspindia.org/"
  },
  {
    title: "Abros Shoes",
    tags: ["Shopify"],
    imageUrl: abrosImg,
    link: "https://abrosshoes.com/"
  },
  
  {
    title: "Nino Bambino",
    tags: ["Shopify"],
    imageUrl: ninobambinoImg,
    link: "https://ninobambino.in/"
  },
  {
    title: "Offbase",
    tags: ["Wordpress"],
    imageUrl: offbaseImg,
    link: "https://offbase.in/"
  },
  {
    title: "Mehrohmaah India",
    tags: ["Shopify"],
    imageUrl: mehromaahImg,
    link: "https://mehromaahindia.com/"
  },
  {
    title: "Grow Money",
    tags: ["HTML"],
    imageUrl: growmoneyImg,
    link: "https://growmoneycapital.com/"
  },
  {
    title: "Evara Herbs",
    tags: ["Wordpress"],
    imageUrl: evarherbsImg,
    link: "https://evaraherbs.com/"
  },
  {
    title: "PNAM Insights Solutions",
    tags: ["Wordpress"],
    imageUrl: pnamImg,
    link: "https://pnam.co/"
  },
  {
    title: "21 SQFT",
    tags: ["Wordpress"],
    imageUrl: sqftImg,
    link: "https://21sqft.com/"
  },
  {
    title: "Kaanch Luxe",
    tags: ["Shopify"],
    imageUrl: kaanchImg,
    link: "https://kaanchluxe.in/"
  },
  {
    title: "Bluesparrow Events",
    tags: ["Wordress"],
    imageUrl: bluesparrowImg,
    link: "https://bluesparrowevents.in/"
  },
  {
    title: "Amour Resort Wear",
    tags: ["Wordress"],
    imageUrl: amourImg,
    link: "https://amourresortwear.com/"
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