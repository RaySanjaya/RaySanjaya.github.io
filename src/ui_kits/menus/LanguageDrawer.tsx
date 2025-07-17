import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LanguageDrawer = () => {
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

  const data = lEn;

  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">{ data.language }</span>
        <div className="cursor-pointer p-2 rounded-lg flex flex-row space-x-3 bg-neutral-700">
          {/* <FontAwesomeIcon icon={faMoon} size="sm" className="pt-1"/> */}
          <span>🇺🇸</span>
          <span>{ data.english }</span>
        </div>
        <div className="cursor-pointer p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          {/* <FontAwesomeIcon icon={faSun} size="sm" className="pt-1"/> */}
          <span>🇲🇨</span>
          <span>{ data.bahasa }</span>
        </div>
      </div>
    </>
  )
}