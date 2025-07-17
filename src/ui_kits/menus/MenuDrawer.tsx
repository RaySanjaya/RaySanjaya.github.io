import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type MenuDrawerProps = {
  index: number;
  onSelect: (value: number) => void;
}

export const MenuDrawer = ({ index, onSelect }: MenuDrawerProps) => {
  const lId = {
    experience: "Pengalaman"
  }

  const lEn = {
    experience: "Experience"
  }

  const data = lEn;

  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">Menu</span>
        <div
          className={`cursor-pointer p-2 rounded-lg flex flex-row space-x-3 ${ index == 0 ? 'bg-neutral-700' : 'hover:bg-neutral-700' }`}
          onClick={() => {
            if (index == 0) return;

            onSelect(0);
          }}
        >
          <FontAwesomeIcon icon={faHome} size="sm" className="pt-1"/>
          <span>Home</span>
        </div>
        <div
          className={`cursor-pointer p-2 rounded-lg flex flex-row space-x-3 ${ index == 1 ? 'bg-neutral-700' : 'hover:bg-neutral-700' }`}
          onClick={() => {
            if (index == 1) return;

            onSelect(1);
          }}
        >
          <FontAwesomeIcon icon={faGraduationCap} size="sm" className="pt-1"/>
          <span>{ data.experience }</span>
        </div>
      </div>
    </>
  )
}