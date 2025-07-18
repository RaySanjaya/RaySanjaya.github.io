import { useLanguage } from "@/providers/LanguageProvider"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ThemeDrawer = () => {
  const lId= {
    theme: 'Tema',
    dark: 'Gelap',
    light: 'Terang'
  }

  const lEn= {
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light'
  }

  const { localeId } = useLanguage();
  let data = lEn;
  if (localeId == 'id') data = lId;

  return (
    <>
      <div className="flex flex-col">
        <span className="text-sm text-neutral-500">{ data.theme }</span>
        <div className="cursor-pointer p-2 rounded-lg flex flex-row space-x-3 bg-neutral-700">
          <FontAwesomeIcon icon={faMoon} size="sm" className="pt-1"/>
          <span>{ data.dark }</span>
        </div>
        <div className="cursor-pointer p-2 rounded-lg flex flex-row space-x-3 hover:bg-neutral-700">
          <FontAwesomeIcon icon={faSun} size="sm" className="pt-1"/>
          <span>{ data.light }</span>
        </div>
      </div>
    </>
  )
}