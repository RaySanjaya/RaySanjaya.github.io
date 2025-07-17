'use client'

import { useEffect, useState } from "react"
import { ExperienceAndEducation } from "./ExperienceAndEducation"
import { Home } from "./Home"
import { Menu } from "./Menu"
import { Profile } from "./homes/Profile"
import { Theme } from "./Theme"
import { Language } from "./Language"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { DrawerUi } from "@/ui_kits/DrawerUi"

export const Container = () => {
  const [indexMenu, setIndexMenu] = useState<number>(0);

  useEffect(() => {
    AOS.init()
  }, [])

  const menu = () => {
    if (indexMenu == 0) {
      return <Home />;
    } else if (indexMenu == 1) {
      return <ExperienceAndEducation />
    }
  }

  return (
    <div className="w-full flex flex-row items-center justify-center p-10">
      <div className="flex xl:flex-row lg:flex-row flex-col xl:space-x-5 lg:space-x-5 space-y-5 items-start w-7xl">
        <div className="block xl:hidden lg:hidden">
          <DrawerUi onSelect={setIndexMenu} index={indexMenu} />
        </div>
        <div className="w-full xl:w-96 lg:w-96">
          <Profile />
        </div>
        { menu() }
        <div className="flex-col space-y-3 hidden xl:block lg:block">
          <Menu onSelect={ setIndexMenu } index={indexMenu} />
          <Theme onSelect={ (value) => console.log(value) } index={0} />
          <Language onSelect={ (value) => console.log(value) } index={0} />
        </div>
      </div>
    </div>
  )
}