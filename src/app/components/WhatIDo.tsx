import { BackEnd } from "./BackEnd"
import { FrontEnd } from "./FrontEnd"

export const WhatIDo = () => {
  return (
    <div className="shadow-box mt-5" data-aos='fade-right'>
      <div className='p-9 space-y-5'>
        <h2 className="text-white text-2xl">What I Do?</h2>
        <hr />
        <BackEnd />
        <FrontEnd />
      </div>
    </div>
  )
}