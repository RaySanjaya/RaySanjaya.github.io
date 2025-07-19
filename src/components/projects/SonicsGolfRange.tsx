import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IconPlatForm } from '../homes/WhatIDo';
import { useLanguage } from '@/providers/LanguageProvider';

const SonicsGolfRangeContent = ({ action }: { action: () => void }) => {
  const lId= {
    description: "Aplikasi Member dan Reservasi Bay secara online.",
  }

  const lEn= {
    description: "An online Member and Bay Reservation application.",
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
        <img src='images/sonics_golf_range/a.png' alt="profile" className="rounded-xl h-56 w-full border-transparent object-contain bg-green-800" />
        <div className="flex flex-col space-y-1">
          <span className="font-bold">SONICS GOLF RANGE</span>
          <span className="text-sm text-neutral-400 line-clamp-2">{ data.description }</span>
        </div>
      </div>
    </div>
  )
}

const ModalContain = () => {
  const defaultImages = [
    {
      original: "images/sonics_golf_range/a.png",
      thumbnail: "images/sonics_golf_range/a.png",
    },
    {
      original: "images/sonics_golf_range/b.png",
      thumbnail: "images/sonics_golf_range/b.png",
    },
    {
      original: "images/sonics_golf_range/c.png",
      thumbnail: "images/sonics_golf_range/c.png",
    },
    {
      original: "images/sonics_golf_range/d.png",
      thumbnail: "images/sonics_golf_range/d.png",
    },
    // {
    //   original: "images/sonics_golf_range/e.png",
    //   thumbnail: "images/sonics_golf_range/e.png",
    // }
  ];

  const [images, setImages] = useState<any>(defaultImages)

  const onFullScreenimages = [
    {
      original: "images/sonics_golf_range/a.png",
      thumbnail: "images/sonics_golf_range/a.png",
    },
    {
      original: "images/sonics_golf_range/b.png",
      thumbnail: "images/sonics_golf_range/b.png",
    },
    {
      original: "images/sonics_golf_range/c.png",
      thumbnail: "images/sonics_golf_range/c.png",
    },
    {
      original: "images/sonics_golf_range/d.png",
      thumbnail: "images/sonics_golf_range/d.png",
    },
    {
      original: "images/sonics_golf_range/e.png",
      thumbnail: "images/sonics_golf_range/e.png",
    }
  ];

  const lId= {
    description: "Aplikasi Member dan Reservasi Bay secara online.",
    sub_desc: "Tersedia di Play Store dan App Store."
  }

  const lEn= {
    description: "An online Member and Bay Reservation application.",
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
          onScreenChange={(isFull) => {
            if (isFull) {
              setImages(onFullScreenimages);
            } else {
              setImages(defaultImages);
            }
          }}
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

export const SonicsGolfRange = () => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <SonicsGolfRangeContent action={open} />

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/60">
            <DialogPanel
              transition
              className="w-3xl rounded-xl border-1 border-neutral-700 bg-black/20 p-6 backdrop-blur-2xl duration-75 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className='flex flex-row justify-between space-y-2'>
                <span className='font-bold text-xl'>Sonics Golf Range</span>
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