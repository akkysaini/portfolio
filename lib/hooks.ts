import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';


export  function useSectionInView(sectionName : SectionName , thresholdValue = 0.75, ) {
    const {ref,inView}  = useInView({threshold : thresholdValue});
     const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
     useEffect(()=>{
      if(inView && Date.now() - timeOfLastClick > 1000){
        setActiveSection (sectionName);
       }
     },[inView, setActiveSection, timeOfLastClick, sectionName])

     return (
        {ref,}
        );
}
