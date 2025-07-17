import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Drawer from 'react-modern-drawer'

import 'react-modern-drawer/dist/index.css'
import { MenuDrawer } from './menus/MenuDrawer'
import { ThemeDrawer } from './menus/ThemeDrawer'
import { LanguageDrawer } from './menus/LanguageDrawer'

export const DrawerUi = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <FontAwesomeIcon icon={faBars} onClick={toggleDrawer} className='cursor-pointer text-black' size='xl' />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bg-neutral-900/95! rounded-4xl!'
      >
        <div className='pt-10 ps-10 pe-5 space-y-4'>
          <MenuDrawer />
          <ThemeDrawer />
          <LanguageDrawer />
        </div>
      </Drawer>
    </>
  )
}
