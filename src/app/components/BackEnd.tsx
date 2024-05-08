import { CodepenIcon } from "lucide-react"

export const BackEnd = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-6 xl:w-16 lg:w-16 md:w-16 me-4">
          <CodepenIcon size={52} strokeWidth={3} absoluteStrokeWidth className="text-indigo-500 hidden xl:block lg:block md:block" />
          <CodepenIcon size={30} strokeWidth={1} absoluteStrokeWidth className="text-indigo-500 block xl:hidden lg:hidden md:hidden" />
        </div>
        <div className="w-full">
          <h4 className="font-semibold text-xl pb-2">
            <u>
              Back End Developer
            </u>
          </h4>
          <div className="space-y-5">
            <p className="font-content">I possess expertise in various aspects of Back-End development, including crafting complex application logic to meet business needs, database management such as designing schemas, and query optimization, as well as seamless integration between Front-End and Back-End of Web Applications.</p>
            <p className="font-content">I also understand web security practices, including user access management, protection against attacks, and the use of HTTPS. Additionally, I have experience in developing responsive and robust APIs, along with proficiency in testing, debugging, and ensuring the scalability and performance of Back-End applications.</p>
            <p className="font-content">Here are two Back-End Frameworks that I commonly use in my projects.</p>
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-row">
                <img
                  className="react-icon"
                  src="rails-icon.png"
                  alt="platform_icon"
                  style={{
                    maxWidth: '22px',
                    maxHeight: '22px'
                  }}
                />
                <div className="ps-1 pe-3">
                  <a href="https://rubyonrails.org" target="_blank" className="platform-text">Ruby On Rails</a>
                </div>
              </div>

              <div className="flex flex-row">
                <img
                  className="react-icon"
                  src="laravel-icon.png"
                  alt="platform_icon"
                  style={{
                    maxWidth: '22px',
                    maxHeight: '22px'
                  }}
                />
                <div className="ps-1">
                  <a href="https://laravel.com" target="_blank" className="platform-text">Laravel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}