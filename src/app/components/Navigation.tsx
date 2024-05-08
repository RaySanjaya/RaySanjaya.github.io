import { HomeIcon, MessageSquareTextIcon } from "lucide-react";

type NavigationProps = {
  current_menu: number;
  setCurrentMenu: Function;
}


export const Navigation = ({ current_menu, setCurrentMenu }: NavigationProps) => {
  let landingClass: string = 'flex flex-row items-center pe-4 action'
  let contactMeClass: string = 'flex flex-row items-center pe-4 action'
  if (current_menu === 1) landingClass = 'flex flex-row items-center pe-4 active'
  if (current_menu === 3) contactMeClass = 'flex flex-row items-center pe-4 active'

  return (
    <div className="mb-5" data-aos='zoom-in'>
      <div className="flex justify-center xl:justify-start lg:justify-start md:justify-start sm:justify-start">
        <ul className="flex flex-row">
          <li className={ landingClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(1) }}>
            <HomeIcon size={25} strokeWidth={1.7} absoluteStrokeWidth className="pr-1" />
            Landing
          </li>
          <li className={ contactMeClass } style={{ cursor: 'pointer' }} onClick={() => { setCurrentMenu(3) }}>
            <MessageSquareTextIcon size={25} strokeWidth={1.7} absoluteStrokeWidth className="pr-1" />
            Contact Me
          </li>
        </ul>
      </div>
    </div>
  )
}