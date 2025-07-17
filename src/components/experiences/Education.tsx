import FadeIn from "react-fade-in";

export const Education = () => {
  const lId = {
    title: 'Pendidikkan'
  }

  const lEn = {
    title: 'Education'
  }

  const data = lEn;

  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl p-9" data-aos='fade-up'>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white text-3xl">{ data.title }</h2>
        <hr className="border-gray-500 pb-2" />
        <FadeIn>
          <div className="ps-4">
            <ol className="relative border-s border-gray-500 dark:border-gray-500">
              <li className="mb-10 ms-6">            
                <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -start-2 ring-2 ring-gray-500 dark:ring-gray-500 dark:bg-grey-500" />
                <h3 className="leading-tight font-bold">UNIVERSITAS PRIMA INDONESIA, MEDAN (2016 - 2020)</h3>
                <p className="font-bold text-sm text-gray-400">S1 - Teknik Informatika - IPK 3,68</p>
              </li>
            </ol>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}