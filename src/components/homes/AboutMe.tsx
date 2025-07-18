import { useLanguage } from "@/providers/LanguageProvider";
import FadeIn from "react-fade-in";

export const AboutMe = () => {
  const lId = {
    title: 'Tentang Saya',
    part_one: 'Halo!',
    part_two: 'Saya seorang Full Stack Developer dengan pengalaman dalam mengembangkan aplikasi dari sisi Back-end dan Front-end, untuk platform Web maupun Mobile. Terbiasa bekerja dengan framework modern seperti Flutter, Next.js, dan Node.js. Memiliki pemahaman yang baik tentang arsitektur aplikasi, RESTful API, serta pengelolaan basis data.',
    part_three: 'Tertarik pada pendekatan yang efisien dan skalabel dalam membangun sistem. Senang terlibat dalam proses teknis yang menantang, berpikir analitis, dan menemukan solusi yang berdampak.'
  }

  const lEn = {
    title: 'About Me',
    part_one: 'Hi there..',
    part_two: `I'm a Full Stack Developer with experience in building applications across both Back-end and Front-end, for Web and Mobile platforms. Comfortable working with modern frameworks like Flutter, Next.js, and Node.js. I have a solid understanding of application architecture, RESTful APIs, and database management.`,
    part_three: `I enjoy building efficient and scalable systems. Tackling technical challenges is my favorite part. It's where I get to think analytically and create impactful solutions.`
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl" data-aos='fade-up'>
      <div className='p-9 space-y-5'>
        <h2 className="text-white text-2xl">{ data.title }</h2>
        <hr className="border-gray-500" />
        <FadeIn className="space-y-5 text-sm">
          <p className="font-content">{ data.part_one }</p>
          <p className="font-content">{ data.part_two }</p>
          <p className="font-content">{ data.part_three }</p>
        </FadeIn>
      </div>
    </div>
  )
}