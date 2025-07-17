import { AboutMe } from "./homes/AboutMe"
import { Menu } from "./Menu"
import { Profile } from "./homes/Profile"
import { Skill } from "./homes/Skill"
import { WhatIDo } from "./homes/WhatIDo"

export const Home = () => {
  return (
    <div className="flex flex-col space-y-5">
      <AboutMe />
      <div className="flex flex-row space-x-5">
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