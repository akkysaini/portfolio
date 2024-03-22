"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "@/context/ThemeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const {theme} = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className=" text-center scroll-mt-28 mb-10 sm:mb-28 "
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? "#f3f4f6" : "rgba(255,255,255,0.05)" ,
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.2)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                color: theme === 'light' ? "#555" : "#fff",
                visibility: "visible",
              }}
              contentArrowStyle={{
                borderRight: theme === 'light' ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255,255,255,0.5)",
                visibility: "visible",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? "white" : "rgba(255,255,255,0.2)",
                fontSize: "1.5rem",
                visibility: "visible",
                color: theme === 'light' ? "#9B9B9D": "#fff",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
