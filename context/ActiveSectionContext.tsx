"use client";
import { links } from '@/lib/data';
import React, { createContext, useContext, useState } from 'react'



type ActiveSectionContextProviderProps ={
    children : React.ReactNode
}

export const ActiveSectionContext = createContext<ActiveSectionContexType | null>(null);

type ActiveSectionContexType = {
    activeSection : SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

type SectionName = typeof links[number]["name"];

export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={
       { activeSection, setActiveSection}
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