import { AboutMe } from "./homes/AboutMe"
import { Menu } from "./Menu"
import { Profile } from "./homes/Profile"
import { Skill } from "./homes/Skill"
import { WhatIDo } from "./homes/WhatIDo"

export const Home = () => {
  return (
    <div className="flex flex-col space-y-5">
      <AboutMe />
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:space-x-5 lg:space-x-5 md:space-x-5 space-y-5">
        <div className="w-full">
          <WhatIDo />
        </div>
        <div className="w-full">
          <Skill />
        </div>
      </div>
    </div>
  )
}