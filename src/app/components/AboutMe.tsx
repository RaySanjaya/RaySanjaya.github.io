import { WhatIDo } from "./WhatIDo"

export const AboutMe = () => {
  return (
    <>
      <div className="shadow-box" data-aos='fade-left'>
        <div className='p-9 space-y-5'>
          <h2 className="text-white text-3xl">About Me</h2>
          <hr />
          <p className="font-content">Hi there..</p>
          <p className="font-content">I am a passionate Full-stack Web Developer with rich experience in designing and building engaging web applications.</p>
          <p className="font-content"> With a combination of Front-end and Back-end skills, I dedicate myself to creating innovative and user-friendly technology solutions. I believe that every project is an opportunity to explore creative ideas and implement best practices in web development. </p>
          <p className="font-content">Let`s collaborate and create amazing web experiences together.</p>
        </div>
      </div>
      <WhatIDo />
    </>
  )
}