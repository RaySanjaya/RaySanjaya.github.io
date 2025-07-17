import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LanguageDrawer = () => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">Language</span>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          {/* <FontAwesomeIcon icon={faMoon} size="sm" className="pt-1"/> */}
          <span>🇺🇸</span>
          <span>English</span>
        </div>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          {/* <FontAwesomeIcon icon={faSun} size="sm" className="pt-1"/> */}
          <span>🇲🇨</span>
          <span>Bahasa</span>
        </div>
      </div>
    </>
  )
}