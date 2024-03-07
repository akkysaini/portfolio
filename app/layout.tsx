import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akash Saini | Personal Portfolio",
  description: "Akash is a frontend developer with 1.5 years of experience.",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} h-[200vh]  bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] blur-[10rem] w-[31.25rem] -z-10 rounded-full sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] blur-[10rem]  w-[50rem] -z-10 rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <ActiveSectionContextProvider>
        <Header/>
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}


