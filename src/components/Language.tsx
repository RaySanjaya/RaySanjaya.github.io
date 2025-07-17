import { faGraduationCap, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LanguageProps = {
  index: number;
  onSelect: (value: number) => void;
}

export const Language = ({ onSelect, index }: LanguageProps) => {
  return (
    <div className="bg-black/60 backdrop-3xl rounded-2xl" data-aos='fade-up'>
      <div className="flex flex-col justify-center items-center ps-2 pe-2 pt-2 pb-2 space-y-2">
        <div
          className={ `cursor-pointer p-2 rounded-4xl w-10 h-10 text-center ${index == 0 ? 'bg-gray-600/50' : 'hover:bg-gray-600/50'}` }
          onClick={ () => {
            if (index == 0) return;
            onSelect(0)
          }}
        >
          <span>EN</span>
        </div>
        <div
          className={ `cursor-pointer p-2 rounded-4xl w-10 h-10 text-center ${index == 1 ? 'bg-gray-600/50' : 'hover:bg-gray-600/50'}` }
          onClick={ () => {
            if (index == 1) return;
            onSelect(1)
          }}
        >
          <span>ID</span>
        </div>
      </div>
    </div>
  )
}