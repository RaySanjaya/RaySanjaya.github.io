'use client'

import { useState } from "react"
import { ContentRendering } from "./ContentRendering"
import { Navigation } from "./Navigation"

export const Description = () => {
  const [currentMenu, setCurrentMenu] = useState<number>(1)

  return (
    <>
      <Navigation current_menu={ currentMenu } setCurrentMenu={ setCurrentMenu } />
      <ContentRendering current_menu={ currentMenu } />
    </>
  )
}