"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from "@/components/Project";
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const {ref} = useSectionInView('Projects', 0.2);
  return (
    <section id='projects' ref={ref} className='scroll-mt-28 mb-10 sm:mb-28 max-w-[1160px] w-[100%]'>
        <SectionHeading>my projects</SectionHeading>
        <div className='flex flex-wrap gap-4 items-start justify-between'>
            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}

