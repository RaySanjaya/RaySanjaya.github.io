'use client'

import { useState } from "react"
import { ExperienceAndEducation } from "./ExperienceAndEducation"
import { Home } from "./Home"
import { Menu } from "./Menu"
import { Profile } from "./homes/Profile"
import { Theme } from "./Theme"
import { Language } from "./Language"

export const Container = () => {
  const [indexMenu, setIndexMenu] = useState<number>(0);

  const menu = () => {
    if (indexMenu == 0) {
      return <Home />;
    } else if (indexMenu == 1) {
      return <ExperienceAndEducation />
    }
  }

  return (
    <div className="w-full flex flex-row items-center justify-center p-10">
      <div className="flex flex-row space-x-5 items-start w-7xl">
        <div className="w-96">
          <Profile />
        </div>
        { menu() }
        <div className="flex flex-col space-y-3">
          <Menu onSelect={ setIndexMenu } index={indexMenu} />
          <Theme onSelect={ (value) => console.log(value) } index={0} />
          <Language onSelect={ (value) => console.log(value) } index={0} />
        </div>
      </div>
    </div>
  )
}