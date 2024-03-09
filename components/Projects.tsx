"use client";
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from "@/components/Project";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.5);
  return (
    <section id='projects' ref={ref} className='scroll-mt-28 mb-10 sm:mb-28 '>
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

