"use client"
import Heading from '@/app/components/shared/Heading'
import { PROJECTS } from '../../../../constants'
import ProjectCard from '@/app/components/shared/ProjectCard'
import Link from 'next/link'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);
export default function RecentProjects() {

  const container = useRef<HTMLElement | null>(null);
    useGSAP(() => {
      const tl1 = gsap.timeline({
          scrollTrigger: {
              trigger: container.current,
              start: "1% 90%",
              end: "30% 30%",

              scrub:true
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

      tl1.from(".recent-projects-gsp > div",{
          y: 100,

          opacity: 0,
          stagger: 0.1,
          duration: 0.8
      })

  }, {scope: container})


  return (
    <section ref={container} className='border-2 py-10 slight-border mobile-sm:py-3 mobile-sm:mt-24 mobile-sm:border'>
      <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto laptop:max-w-[97vw]">

        <Heading content="Recent Projects" />
        <div className="recent-projects-gsp grid grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto laptop:gap-6 tablet:grid-cols-2 tablet:gap-y-10 mobile-md:grid-cols-1">
          {PROJECTS.slice(0, 3).map((project, index) => {
           
            return <ProjectCard key={index} project={project} />
          }
          )}
          <div className='col-span-3 tablet:col-span-2 mobile-md:col-span-1'>
            <Link className='block w-full' href={`/projects`}>
              <button className=" py-2 px-12 block shadow-md shadow-white mx-auto rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                More Projects
              </button>
            </Link>
          </div>
        </div>
      </div>


    </section>
  )
}

