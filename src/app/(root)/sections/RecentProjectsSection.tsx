
import Heading from '@/app/components/shared/Heading'
import { PROJECTS } from '../../../../constants'
import { AnimatePresence } from 'motion/react'
import ProjectCard from '@/app/components/shared/ProjectCard'


export default function RecentProjects() {

  return (
    <section className='border-2 py-10 slight-border'>
      <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto">

        <Heading content="Recent Projects" />
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
            {PROJECTS.slice(0,3).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>


    </section>
  )
}

