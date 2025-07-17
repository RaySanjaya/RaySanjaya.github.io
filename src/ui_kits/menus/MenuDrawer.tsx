import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const MenuDrawer = () => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">Menu</span>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          <FontAwesomeIcon icon={faHome} size="sm" className="pt-1"/>
          <span>Home</span>
        </div>
        <div className="p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          <FontAwesomeIcon icon={faGraduationCap} size="sm" className="pt-1"/>
          <span>Experience</span>
        </div>
      </div>
    </>
  )
}