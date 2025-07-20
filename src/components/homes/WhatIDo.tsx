import { useLanguage } from "@/providers/LanguageProvider"
import { faCode, faServer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconPlatForm = ({ src, url, text }: { src: string, url: string, text: string }) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-4xl bg-black/30 ps-3 pe-3 pt-2 pb-2 space-x-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="react-icon"
        src={src}
        alt="platform_icon"
        style={{
          maxWidth: '15px',
          maxHeight: '15px'
        }}
      />
      <a href={url} target="_blank" className="platform-text text-xs text-gray-300">{ text }</a>
    </div>
  )
}

const BackEnd = () => {
  const lId = {
    part_one: 'Mengembangkan dan memelihara API Backend untuk mendukung kebutuhan aplikasi Web dan Mobile, termasuk otentikasi, manajemen data, dan intergrasi pihak ketiga.',
    part_two: 'Merancang dan mengelola struktur database relasional termasuk optimasi query dan normalisasi data.'
  }

  const lEn = {
    part_one: 'Developing and maintaining backend APIs to support the needs of Web and Mobile applications, including authentication, data management, and third-party integrations.',
    part_two: 'Designing and managing relational database structures, including query optimization and data normalization.'
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className="flex flex-row space-x-5">
      <FontAwesomeIcon icon={faServer} className="text-indigo-500 pt-1" />
      <div className="flex flex-col space-y-2 items-start">
        <span className="font-bold">
          <u>Back-end Developer</u>
        </span>
        <div className="ps-4 text-sm">
          <ul className="list-disc space-y-2">
            <li>{ data.part_one }</li>
            <li>{ data.part_two }</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-3 items-center justify-start">
          <IconPlatForm src={"images/rails-icon.png"} url={"https://rubyonrails.org"} text="Ruby On Rails" />
        </div>
      </div>
    </div>
  )
}

const FrontEnd = () => {
  const lId = {
    part_one: 'Membangun antarmuka pengguna (UI) untuk aplikasi web menggunakan Next JS dan mobile menggunakan Flutter dengan fokus pada performa dan user experience.'
  }

  const lEn = {
    part_one: 'Building user interfaces (UI) for web applications using Next.js and for mobile applications using Flutter, with a focus on performance and user experience.'
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className="flex flex-row space-x-5">
      <FontAwesomeIcon icon={faCode} className="text-amber-400 pt-1" />
      <div className="flex flex-col space-y-2 items-start">
        <span className="font-bold">
          <u>Front-end Developer</u>
        </span>
        <p className="text-sm">{ data.part_one }</p>
        <div className="flex flex-wrap gap-3 items-center justify-start">
          <IconPlatForm src={"images/flutter-icon.png"} url={"https://flutter.dev"} text="Flutter" />
          <IconPlatForm src={"images/nextjs-icon.png"} url={"https://nextjs.org"} text="Next JS" />
          <IconPlatForm src={"images/react-icon.png"} url={"https://react.dev"} text="React JS" />
        </div>
      </div>
    </div>
  )
}

export const WhatIDo = () => {
  const lId = {
    title: 'Apa yang bisa saya lakukan?'
  }

  const lEn = {
    title: 'What I Do?'
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl" data-aos='fade-up'>
      <div className='p-9 space-y-5'>
        <h2 className="text-white text-xl">{ data.title }</h2>
        <hr className="border-gray-500" />
        <div className="space-y-5">
          <BackEnd />
          <FrontEnd />
        </div>
      </div>
    </div>
  )
}