'use client'

import ProgressBar from "@ramonak/react-progress-bar"
import FadeIn from "react-fade-in"

export const Skill = () => {
  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl" data-aos='fade-up'>
      <div className='p-9 space-y-5'>
        <h2 className="text-white text-3xl">Skill</h2>
        <hr className="border-gray-500 bg-gray-5" />
        <FadeIn>
          <ul className="list-disc ps-4 space-y-3">
            <li>
              Ruby On Rails
              <br />
              <ProgressBar completed="98" customLabel="98%" height="16px" bgColor="#6a7282" baseBgColor="#ffffff" labelSize='14px' />
            </li>
            <li>
              Flutter
              <br />
              <ProgressBar completed="95" customLabel="95%" height="16px" bgColor="#6a7282" baseBgColor="#ffffff" labelSize='14px' />
            </li>
            <li>
              Next JS
              <br />
              <ProgressBar completed="95" customLabel="95%" height="16px" bgColor="#6a7282" baseBgColor="#ffffff" labelSize='14px' />
            </li>
            <li>
              React JS
              <br />
              <ProgressBar completed="90" customLabel="90%" height="16px" bgColor="#6a7282" baseBgColor="#ffffff" labelSize='14px' />
            </li>
          </ul>
        </FadeIn>
      </div>
    </div>
  )
}