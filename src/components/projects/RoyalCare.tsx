import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IconPlatForm } from '../homes/WhatIDo';
import { useLanguage } from '@/providers/LanguageProvider';

const RoyalCareContent = ({ action }: { action: () => void }) => {
  const lId= {
    description: "Aplikasi bagi seluruh pasien untuk memantau kesehatannya dan memudahkan melihat hasil laboratorium."
  }

  const lEn= {
    description: "An application for all patients to monitor their health and easily view laboratory results."
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div
      className="bg-black/30 backdrop-3xl rounded-2xl p-5 w-full h-96 hover:scale-105 cursor-pointer border-1 border-neutral-800"
      onClick={action}
    >
      <div className="flex flex-col space-y-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='images/royal_care/a.png' alt="profile" className="rounded-xl h-56 w-full border-transparent object-contain bg-white" />
        <div className="flex flex-col space-y-1">
          <span className="font-bold">ROYAL CARE</span>
          <span className="text-sm text-neutral-400 line-clamp-2">{ data.description }</span>
        </div>
      </div>
    </div>
  )
}

const ModalContain = () => {
  const images = [
    {
      original: "images/royal_care/a.png",
      thumbnail: "images/royal_care/a.png",
    },
    {
      original: "images/royal_care/b.png",
      thumbnail: "images/royal_care/b.png",
    },
  ];

  const lId= {
    description: "Aplikasi bagi seluruh pasien untuk memantau kesehatannya dan memudahkan melihat hasil laboratorium.",
    sub_desc: "Tersedia di Play Store dan App Store."
  }

  const lEn= {
    description: "An application for all patients to monitor their health and easily view laboratory results.",
    sub_desc: "Available on the Play Store and App Store."
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className='flex flex-col space-y-5'>
      <div className='bg-neutral-600/30 p-4 rounded-xl object-contain w-auto'>
        <ImageGallery
          items={images}
          showFullscreenButton
          showPlayButton={false}
        />
      </div>
      <div className='bg-neutral-600/30 p-4 rounded-xl flex flex-col space-y-3'>
        <span className="text-sm">{ data.description }</span>
        <span className="text-xs text-neutral-400">{ data.sub_desc }</span>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          <IconPlatForm src={"images/rails-icon.png"} url={"https://rubyonrails.org"} text="Ruby On Rails" />
          <IconPlatForm src={"images/flutter-icon.png"} url={"https://flutter.dev"} text="Flutter" />
        </div>
      </div>
    </div>
  );
}

export const RoyalCare = () => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <RoyalCareContent action={open} />

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/60">
            <DialogPanel
              transition
              className="w-3xl rounded-xl border-1 border-neutral-700 bg-black/20 p-6 backdrop-blur-2xl duration-75 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className='flex flex-row justify-between space-y-2'>
                <span className='font-bold text-xl'>Royal Care</span>
                <div
                  className='flex flex-col items-center justify-center hover:bg-neutral-500/30 w-7 h-7 p-1 rounded-full cursor-pointer'
                  onClick={close}
                >
                  <FontAwesomeIcon icon={faClose} />
                </div>
              </div>
              <ModalContain />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

{/* <Button
  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
  onClick={close}
>
  Got it, thanks!
</Button> */}