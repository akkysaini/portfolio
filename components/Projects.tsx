"use client";
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from "@/components/Project";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';



export default function Projects() {
  const {ref,inView}  = useInView({
    threshold:0.5,
  });
 const {setActiveSection} = useActiveSectionContext();
 useEffect(()=>{
  if(inView){
    setActiveSection ("Projects");
   }
 },[inView, setActiveSection])

  return (
    <section id='projects' ref={ref} className='scroll-mt-28'>
        <SectionHeading>my projects</SectionHeading>
        <div>
            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

