"use client";
import React, { createContext, useContext, useState } from 'react'



type ActiveSectionContextProviderProps ={
    children : React.ReactNode
}

export const ActiveSectionContext = createContext<ActiveSectionContexType | null>(null);

type ActiveSectionContexType = {
    activeSection : SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}


export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider value={
       { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}
    }>
        {children}
    </ActiveSectionContext.Provider>
  );
}


export function useActiveSectionContext (){
    const context = useContext (ActiveSectionContext);

    if(context === null){
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context;
}