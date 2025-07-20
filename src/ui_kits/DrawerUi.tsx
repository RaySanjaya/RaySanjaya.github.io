import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { MenuDrawer } from './menus/MenuDrawer'
import { ThemeDrawer } from './menus/ThemeDrawer'
import { LanguageDrawer } from './menus/LanguageDrawer'

type DrawerUiProps = {
  index: number;
  onSelect: (value: number) => void;
}

export const DrawerUi = ({ index, onSelect }: DrawerUiProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <div className='bg-black/30 z-10 pt-4 pb-4 ps-5 pe-5 w-full fixed backdrop-blur-2xl flex flex-row space-x-5'>
        <FontAwesomeIcon icon={faBars} onClick={toggleDrawer} className='cursor-pointer text-neutral-400' size='xl' />
        <span>{ '<Ray.Dev/>' }</span>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bg-neutral-900/70! border-1 border-neutral-700 rounded-r-4xl! backdrop-blur-2xl'
      >
        <div className='p-5 space-y-4'>
          <MenuDrawer
            onSelect={(value: number) => {
              onSelect(value);
              toggleDrawer();
            }}
            index={index}
          />
          <LanguageDrawer onSelect={toggleDrawer} />
          <ThemeDrawer />
        </div>
      </Drawer>
    </>
  )
}
