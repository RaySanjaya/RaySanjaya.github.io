import { useLanguage } from "@/providers/LanguageProvider"

type LanguageProps = {
  onSelect: () => void;
}

export const LanguageDrawer = ({ onSelect }: LanguageProps) => {
  const lId = {
    language: "Bahasa",
    english: "Bahasa Inggris",
    bahasa: 'Bahasa Indonesia'
  }

  const lEn = {
    language: "Language",
    english: "English",
    bahasa: 'Bahasa'
  }

  const { localeId, setLocale } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">{ data.language }</span>
        <div
          className={`cursor-pointer p-2 rounded-lg flex flex-row space-x-3 ${ localeId == 'en' ? 'bg-neutral-700' : 'hover:bg-neutral-700' }`}
          onClick={() => {
            if (localeId == 'en') return;
            setLocale('en');
            onSelect();
          }}
        >
          <span>🇺🇸</span>
          <span>{ data.english }</span>
        </div>
        <div
          className={`cursor-pointer p-2 rounded-lg flex flex-row space-x-3 ${ localeId == 'id' ? 'bg-neutral-700' : 'hover:bg-neutral-700' }`}
          onClick={() => {
            if (localeId == 'id') return;
            setLocale('id');
            onSelect();
          }}
        >
          <span>🇲🇨</span>
          <span>{ data.bahasa }</span>
        </div>
      </div>
    </>
  )
}