import { AboutMe } from "./AboutMe"
import { ContactMe } from "./ContactMe";

type ContentRenderingProps = {
  current_menu: number;
}

export const ContentRendering = ({ current_menu }: ContentRenderingProps) => {

  if (current_menu === 1) {
    return (
      <>
        <AboutMe />
      </>
    )
  }

  return (
    <ContactMe />
  )
}