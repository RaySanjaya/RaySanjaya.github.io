export const SalessoupPos = () => {
  return (
    <div className="bg-black/50 backdrop-3xl rounded-2xl p-5 w-full h-96 hover:scale-105 cursor-pointer" data-aos='fade-up'>
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