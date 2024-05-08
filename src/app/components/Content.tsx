'use client'

import { useEffect } from "react";
import { Cart } from "./Cart"
import { Description } from "./Description"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Content = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="mt-4 xl:mt-12 lg:mt-12 md:mt-12 mb-12">
      <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row">
        <section>
          <Cart />
        </section>
        <section className="xl:ml-5 lg:ml-5 md:ml-5 mt-5 xl:mt-0 lg:mt-0 md:mt-0 w-full">
          <Description />
        </section>
      </div>
    </div>
  )
}