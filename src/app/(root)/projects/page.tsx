import Heading from '@/app/components/shared/Heading'
import React from 'react'
import { PROJECTS } from '../../../../constants'
import ProjectCard from '@/app/components/shared/ProjectCard'

const ProjectsPage = () => {
  return (
    <section className='border-2 py-10 slight-border'>
    <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto">
        <Heading content="All Projects"/>
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        </div>
    </section>
  )
}

export default ProjectsPage
