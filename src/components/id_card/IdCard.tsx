'use client'

import Lanyard from "@/ui_kits/Lanyard"
import { faRotate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export const IdCard = () => {
  const [pathCard, setPathCard] = useState<string>("images/front_side.glb");

  return (
    <div>
      <div className="fixed z-40 ps-8 pt-8">
        <div
          className="p-1 hover:bg-neutral-500/30 rounded-full cursor-pointer"
          onClick={() => {
          if (pathCard == "images/front_side.glb" ) {
            setPathCard("images/back_side.glb");
            return;
          }
          setPathCard("images/front_side.glb");
       }}
        >
          <FontAwesomeIcon icon={faRotate} size="lg" />
        </div>
      </div>

      <Lanyard
        position={[0, 0, 19]}
        gravity={[0, -40, 0]}
        pathCard={ pathCard }
      />
    </div>
  )
}