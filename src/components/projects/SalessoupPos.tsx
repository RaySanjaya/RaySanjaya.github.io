import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const SalessoupPosContent = ({ action }: { action: () => void }) => {
  return (
    <div
      className="bg-black/30 backdrop-3xl rounded-2xl p-5 w-full h-96 hover:scale-105 cursor-pointer border-1 border-neutral-800"
      data-aos='fade-up'
      onClick={action}
    >
      <div className="flex flex-col space-y-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='images/testing.png' alt="profile" className="rounded-xl h-56 w-full border-transparent object-contain bg-white" />
        <div className="flex flex-col space-y-1">
          <span className="font-bold">SALESSOUP POS</span>
          <span className="text-sm text-neutral-400 line-clamp-2">Aplikasi kasir yang dirancang untuk kemudahan penggunaan dan kecepatan operasional toko atau usaha.</span>
        </div>
        <span className="text-xs text-neutral-300 line-clamp-2">Flutter, Ruby On Rails</span>
      </div>
    </div>
  )
}

export const SalessoupPos = () => {
  const [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <SalessoupPosContent action={open} />

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/60">
            <DialogPanel
              transition
              className="w-3xl rounded-xl border-1 border-neutral-700 bg-black/20 p-6 backdrop-blur-2xl duration-75 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="mt-4">
                <Button
                  className="cursor-pointer inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                  onClick={close}
                >
                  Got it, thanks!
                </Button>
              </div>
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