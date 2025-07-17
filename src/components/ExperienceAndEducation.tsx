import { Education } from "./experiences/Education"
import { Experience } from "./experiences/Experience"

export const ExperienceAndEducation = () => {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <Experience />
      <Education />
    </div>
  )
}