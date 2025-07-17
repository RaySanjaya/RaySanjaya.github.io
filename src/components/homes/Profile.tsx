import { faGithub, faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope, faGift, faLocationDot, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeIn from "react-fade-in";

export const Profile = () => {
  const lId = {
    phone: "Telepon",
    location: "Lokasi",
    birthday: "Tanggal Lahir",
    birthday_detail: '6 Maret 1998'
  }

  const lEn = {
    phone: "Phone",
    location: "Location",
    birthday: "Birthday",
    birthday_detail: 'March 06, 1998'
  }

  const data = lEn;

  return (
    <div className="bg-black/60 backdrop-3xl p-10 rounded-2xl" data-aos='fade-up'>
      <div className="flex flex-col justify-center items-center">
        <FadeIn className="w-full">
          <div className="flex flex-col justify-center items-center space-y-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='images/dp.jpg' alt="profile" className="w-56 rounded-xl border-transparent" />
            <h1 className="text-center text-white text-4xl font-semibold pt-2 pb-2">Ray Sanjaya</h1>
            <div className="flex justify-center mt-2 mb-2">
              <h1 className='d-inline-block pt-2 pb-2 ps-4 pe-4 font-content rounded-full bg-black/30'>Software Engineer</h1>
            </div>
          </div>

          <div className='flex flex-row space-x-3 justify-center icon-boxes p-2'>
            <a href="https://www.instagram.com/raysnjya/?igsh=ODkyaWF1ZmU0djZl" target='_blank' className='pe-2'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
            <a href="https://www.facebook.com/share/XTwGiaXwoCtrNZjA/?mibextid=qi2Omg" target='_blank' className='pe-2'>
              <FontAwesomeIcon icon={faSquareFacebook} size='2x' />
            </a>
            <a href="https://github.com/RaySanjaya" target='_blank' className='pe-2'>
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
            <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEO_T67Rqw4hQAAAY9WHHZoW0ZIjo3cOCnWpzpN9iiX0wUpWc7J2gxktDybm6EIVcG0zEFZJ9NAQKJqgT7KG0zxpEPRGQv3CydMOMr8JkpLaZigO7-0zmhrVwE99dfn3kmYxp0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fray-sanjaya-1159ab201%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </div>

          <div className='flex flex-col space-y-3 mt-3 p-4 rounded-lg bg-black/30'>
            <div className='flex flex-row space-x-3'>
              <div className='flex items-center justify-center w-10'>
                <FontAwesomeIcon icon={faMobileScreenButton} size='lg' />
              </div>
              <div className="w-full">
                <small className='text-gray-400'>{ data.phone }</small>
                <br />
                <label className="font-content">+62 813 XXXX XX66</label>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className='flex flex-row space-x-3'>
              <div className='flex items-center w-10 justify-center'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
              </div>
              <div className="w-full">
                <small className='text-gray-400'>Email</small>
                <br />
                <label className="font-content">ray.snjya@gmail.com</label>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className='flex flex-row space-x-3'>
              <div className='flex items-center w-10 justify-center'>
                <FontAwesomeIcon icon={faLocationDot} size='lg' />
              </div>
              <div className="w-full">
                <small className='text-gray-400'>{ data.location }</small>
                <br />
                <label className="font-content">Medan, Indonesia</label>
              </div>
            </div>
            <hr className="border-gray-700" />
            <div className='flex flex-row space-x-3'>
              <div className='flex items-center w-10 justify-center'>
                <FontAwesomeIcon icon={faGift} size='lg' />
              </div>
              <div className="w-full">
                <small className='text-gray-400'>{ data.birthday }</small>
                <br />
                <label className="font-content">{ data.birthday_detail }</label>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}