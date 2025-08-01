'use client'

import { useEffect, useRef, useState } from "react"
import { ExperienceAndEducation } from "./ExperienceAndEducation"
import { Home } from "./Home"
import { Menu } from "./Menu"
import { Profile } from "./homes/Profile"
import { Theme } from "./Theme"
import { Language } from "./Language"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { DrawerUi } from "@/ui_kits/DrawerUi"
import { ProjectList } from "./ProjectList"

export const Container = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [indexMenu, setIndexMenu] = useState<number>(0);

  useEffect(() => {
    AOS.init()
  }, [])

  const section = () => {
    if (indexMenu == 0) {
      return <Home />;
    } else if (indexMenu == 1) {
      return <ExperienceAndEducation />
    } else if (indexMenu == 2) {
      return <ProjectList />
    }
  }

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="flex flex-col">
      <div className="block xl:hidden lg:hidden w-full">
        <DrawerUi
          onSelect={(value: number) => {
            setIndexMenu(value);
            scrollToSection();
          }}
          index={indexMenu}
        />
      </div>
      <div className="w-full flex flex-row items-center justify-center xl:p-10 lg:p-10 ps-10 pe-10 pb-10 pt-20">
        <div className="flex xl:flex-row lg:flex-row flex-col xl:space-x-5 lg:space-x-5 space-y-5 items-start w-7xl">
          <div className="w-full xl:w-96 lg:w-96">
            <Profile />
          </div>
          <div ref={ sectionRef } className="w-full" >
            { section() }
          </div>
          <div className="flex-col space-y-3 hidden xl:block lg:block">
            <Menu onSelect={ setIndexMenu } index={indexMenu} />
            <Language />
            <Theme onSelect={ (value) => console.log(value) } index={0} />
          </div>
        </div>
      </div>
    </div>
  )
}