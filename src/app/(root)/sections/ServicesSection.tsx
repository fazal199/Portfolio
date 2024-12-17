"use client"
import Heading from '@/app/components/shared/Heading'
import React, { useRef } from 'react'
import { SERVICES } from '../../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);
const ServicesSection = () => {

  const container = useRef<HTMLElement | null>(null);


  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
        end: "30% 30%",
        scrub: true
      }
    })

    tl1.from("h2", {
      x: -100,
      opacity: 0,
      duration: 1,
    }, "one")

    tl1.from(".gsp-line", {
      scale: 0,
      opacity: 0,
      duration: 1,
    }, "one")

    tl1.from(".service-gsp", {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    }, "first")

   

  }, { scope: container })
  return (
    <section ref={container} className='border-2 py-10 slight-border mobile-sm:border mobile-sm:mt-24'>
      <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto laptop:max-w-[97vw]">
        <Heading content="Our Services" />
        <div className="grid grid-cols-2 gap-x-20 gap-y-12  mt-12 max-w-6xl mx-auto laptop:gap-x-10 tablet:gap-x-5 mobile-md:grid-cols-1">
          {SERVICES.map((service: any, index: any) => {
            const Icon = service.icon;
            return (
              <div
                key={index}

                className={`bg-primary service-gsp  sligt-border slight-shadow rounded-lg shadow-lg overflow-hidden`}
              >
                <div className="relative h-64 mobile-sm:h-44">
                  <Image
                    src={service.imgUrl}
                    alt={service.title}
                    layout="fill"
                    
                    className="transition-transform object-cover duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 items-center mt-2">
                    <Icon className="text-tertiary h-6 w-6" />
                    <h3 className="text-xl font-semibold  text-quaternary">{service.title}</h3>
                  </div>
                  <p className="text-quaternary/70 leading-[1.8] mt-5 ">{service.description}</p>
                  <Link
                    href={"/contact"}
                    className=" w-full  text-quaternary font-medium  transition-colors duration-300"
                  >
                    <button className="w-full text-xl py-3 group flex justify-center items-center gap-2 tracking-wide  mt-5  rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent active:bg-quaternary active:text-tertiary mobile-md:py-2 mobile-md:text-lg">
                      Contact
                    </button>

                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
