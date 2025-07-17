import FadeIn from "react-fade-in";

export const Experience = () => {
  const lId = {
    title: 'Pengalaman',
    part_one: "Mengembangkan dan memelihara API Backend menggunakan Ruby On Rails untuk mendukung kebutuhan aplikasi Web dan Mobile, termasuk otentikasi, manajemen data, dan intergrasi pihak ketiga.",
    part_two: "Membangun antarmuka pengguna (UI) untuk aplikasi web menggunakan Next JS dan mobile menggunakan Flutter dengan fokus pada performa dan user experience.",
    part_three: "Merancang dan mengelola struktur database relasional termasuk optimasi query dan normalisasi data.",
    part_four: "Berkoordinasi dengan tim desain dan QA untuk memastikan aplikasi berjalan sesuai kebutuhan dan bebas bug sebelum dirilis.",
    part_five: "Mengelola source code secara terstruktur menggunakan Git, serta menerapkan workflow kolaborasi seperti branching dan code review.",
    part_six: "Terlibat dalam analisis kebutuhan pengguna, serta memberikan masukan teknis dalam perencanaan fitur baru.",
    part_sevent: "Melakukan pengembangan sistem rumah sakit.",
    part_eight: "Menganilisis kebutuhan sistem.",
    february: "Februari",
    june: "Juni",
    july: "Juli",
    present: "Sekarang"
  }

  const lEn = {
    title: 'Experience',
    part_one: "Developing and maintaining backend APIs using Ruby on Rails to support the needs of Web and Mobile applications, including authentication, data management, and third-party integrations.",
    part_two: "Building user interfaces (UI) for web applications using Next.js and for mobile applications using Flutter, with a focus on performance and user experience.",
    part_three: "Designing and managing relational database structures, including query optimization and data normalization.",
    part_four: "Coordinating with design and QA teams to ensure the application functions as intended and is free of bugs before release.",
    part_five: "Managing source code in a structured manner using Git, and implementing collaborative workflows such as branching and code reviews.",
    part_six: "Involved in analyzing user requirements and providing technical input during the planning of new features.",
    part_sevent: "Developing hospital information systems.",
    part_eight: "Analyzing system requirements.",
    february: "February",
    june: "June",
    july: "July",
    present: "Present"
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
                <h3 className="leading-tight font-bold">CV. Rumah Solusi Digital – Medan, Indonesia</h3>
                <p className="font-bold text-sm text-gray-400">{ `Full Stack Developer (${data.july} 2021 - ${data.present})` }</p>
                <ul className="text-sm list-disc ps-4 pt-3 space-y-2">
                  <li>
                    { data.part_one }
                  </li>
                  <li>
                    { data.part_two }
                  </li>
                  <li>
                    { data.part_three }
                  </li>
                  <li>
                    { data.part_four }
                  </li>
                  <li>
                    { data.part_five }
                  </li>
                  <li>
                    { data.part_six }
                  </li>
                </ul>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -start-2 ring-2 ring-gray-500 dark:ring-gray-500 dark:bg-grey-500" />
                <h3 className="leading-tight font-bold">RSU Royal Prima – Medan, Indonesia</h3>
                <p className="font-bold text-sm text-gray-400">{ `IT Staff (${data.february} 2020 - ${data.june} 2021)` }</p>
                <ul className="text-sm list-disc ps-4 pt-3 space-y-2">
                  <li>
                    { data.part_sevent }
                  </li>
                  <li>
                    { data.part_eight }
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}