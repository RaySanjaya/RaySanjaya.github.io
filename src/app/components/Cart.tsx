import { FacebookIcon, GiftIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, SmartphoneIcon } from "lucide-react"

export const Cart = () => {

  return (
    <div className="shadow-box w-full xl:w-96 lg:w-96 md:w-96" data-aos='fade-down'>
      <div className="ps-8 pe-8 pb-8 pt-8 pt-0">
        <div className="flex justify-center">
          <img src='dp.jpeg' alt="profile" className="w-56 rounded-xl border-transparent" />
        </div>
        <h1 className="text-center text-white text-4xl font-semibold pt-2 pb-2">Ray Sanjaya</h1>
        <div className="flex justify-center mt-2 mb-2">
          <h1 style={{ backgroundColor: 'rgb(17 17 17)' }} className='d-inline-block p-2 font-content rounded'>Software Engineer</h1>
        </div>

        <div className='flex justify-center icon-boxes p-2'>
          <a href="https://www.instagram.com/raysnjya/?igsh=ODkyaWF1ZmU0djZl" target='_blank' className='pe-2'>
            <InstagramIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.facebook.com/share/XTwGiaXwoCtrNZjA/?mibextid=qi2Omg" target='_blank' className='pe-2'>
            <FacebookIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://github.com/RaySanjaya" target='_blank' className='pe-2'>
            <GithubIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEO_T67Rqw4hQAAAY9WHHZoW0ZIjo3cOCnWpzpN9iiX0wUpWc7J2gxktDybm6EIVcG0zEFZJ9NAQKJqgT7KG0zxpEPRGQv3CydMOMr8JkpLaZigO7-0zmhrVwE99dfn3kmYxp0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fray-sanjaya-1159ab201%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target='_blank'>
            <LinkedinIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400 hover:text-white" />
          </a>
        </div>

        <div className='mt-3 p-4 rounded-lg icon-boxes' style={{ backgroundColor: 'rgb(17 17 17)' }}>
          <div className='flex flex-row'>
            <div className='flex items-center w-14'>
              <SmartphoneIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
            </div>
            <div>
              <small className='text-gray-400'>Phone</small>
              <br />
              <label className="font-content">+62 813 XXXX XX66</label>
            </div>
          </div>
          <hr />
          <div className='flex flex-row'>
            <div className='flex items-center w-14'>
              <MailIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
            </div>
            <div className=''>
              <small className='text-gray-400'>Email</small>
              <br />
              <label className="font-content">ray.snjya@gmail.com</label>
            </div>
          </div>
          <hr />
          <div className='flex flex-row'>
            <div className='flex items-center w-14'>
              <MapPinIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
            </div>
            <div className=''>
              <small className='text-gray-400'>Location</small>
              <br />
              <label className="font-content">Medan, Indonesia</label>
            </div>
          </div>
          <hr />
          <div className='flex flex-row'>
            <div className='flex items-center w-14'>
              <GiftIcon size={32} strokeWidth={2} absoluteStrokeWidth className="text-gray-400" />
            </div>
            <div className=''>
              <small className='text-gray-400'>Birthday</small>
              <br />
              <label className="font-content">March 06, 1998</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}