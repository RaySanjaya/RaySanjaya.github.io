import { useLanguage } from "@/providers/LanguageProvider";
import FadeIn from "react-fade-in"
import { SalessoupPos } from "./projects/SalessoupPos";
import { SonicsGolfRange } from "./projects/SonicsGolfRange";
import { RoyalCare } from "./projects/RoyalCare";

export const ProjectList = () => {

  const lId = {
    title: 'Project'
  }

  const lEn = {
    title: 'Project'
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl p-9" data-aos='fade-up'>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white text-2xl">{ data.title }</h2>
        <hr className="border-gray-500 pb-2" />
        <FadeIn>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
            <SalessoupPos />
            <SonicsGolfRange />
            <RoyalCare />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}