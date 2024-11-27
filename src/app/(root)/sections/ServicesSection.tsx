import Heading from '@/app/components/shared/Heading'
import React from 'react'
import { SERVICES } from '../../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightCircle } from 'lucide-react'
const ServicesSection = () => {
  return (
    <section className='border-2 py-10 slight-border'>
      <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto">
        <Heading content="Our Services" />
        <div className="grid grid-cols-2  gap-x-20 gap-y-12 mt-12 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-primary sligt-border slight-shadow rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mt-2">
                    <Icon className="w-6 h-6 text-tertiary mr-3" />
                    <h3 className="text-xl font-semibold  text-quaternary">{service.title}</h3>
                  </div>
                  <p className="text-quaternary/70 leading-[1.8] mt-5 ">{service.description}</p>
                  <Link
                    href="#"
                    className=" w-full  text-quaternary font-medium  transition-colors duration-300"
                  >
                    <button className="w-full text-xl py-3 group flex justify-center items-center gap-2 tracking-wide  mt-5  rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                     Contact <ArrowRightCircle className='group-hover:translate-x-2 transition-all duration-300 '/>
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
