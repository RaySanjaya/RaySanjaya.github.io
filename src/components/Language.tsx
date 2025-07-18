import { useLanguage } from "@/providers/LanguageProvider";

export const Language = () => {
  const { localeId, setLocale } = useLanguage();

  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl" data-aos='fade-up'>
      <div className="flex flex-col justify-center items-center ps-2 pe-2 pt-2 pb-2 space-y-2">
        <div
          className={ `cursor-pointer p-2 rounded-4xl w-10 h-10 text-center ${localeId == 'en' ? 'bg-gray-600/50' : 'hover:bg-gray-600/50'}` }
          onClick={ () => {
            if (localeId == 'en') return;
            setLocale('en');
          }}
        >
          <span>EN</span>
        </div>
        <div
          className={ `cursor-pointer p-2 rounded-4xl w-10 h-10 text-center ${localeId == 'id' ? 'bg-gray-600/50' : 'hover:bg-gray-600/50'}` }
          onClick={ () => {
            if (localeId == 'id') return;
            setLocale('id');
          }}
        >
          <span>ID</span>
        </div>
      </div>
    </div>
  )
}