import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from "@/components/Project";



export default function Projects() {
  return (
    <section className=''>
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

