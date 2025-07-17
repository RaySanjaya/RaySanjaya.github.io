import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ThemeDrawer = () => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">Theme</span>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          <FontAwesomeIcon icon={faMoon} size="sm" className="pt-1"/>
          <span>Dark</span>
        </div>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          <FontAwesomeIcon icon={faSun} size="sm" className="pt-1"/>
          <span>Light</span>
        </div>
      </div>
    </>
  )
}