import Heading from '@/app/components/shared/Heading'
import React from 'react'
import { PROJECTS } from '../../../../constants'
import ProjectCard from '@/app/components/shared/ProjectCard'

const ProjectsPage = () => {
  return (
    <section className='border-2 py-10 slight-border mobile-sm:border mobile-sm:mt-3'>
    <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto laptop:max-w-[98vw]">
        <Heading content="All Projects"/>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 mt-12 max-w-7xl mx-auto laptop:gap-x-4 tablet:grid-cols-2 mobile:max-w-xl mobile:grid-cols-1">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default ProjectsPage
