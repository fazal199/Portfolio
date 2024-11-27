import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const ProjectCard = ({project}:any) => {
  return (
    <div 
                className="bg-primary z-20 rounded-lg slight-shadow slight-border relative  overflow-hidden">
                <img
                  loading='lazy'
                  src={project.image}
                  alt={project.title}

                  className="w-full min-h-56 object-cover object-center"

                />
                <div className="p-6 bg-primary">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag:any, tagIndex:any) => (
                      <span key={tagIndex} className="text-quaternary box-border border-2 border-solid border-tertiary px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl mt-5 font-semibold mb-2 text-quaternary">{project.title}</h3>
                  <ul className="my-4 space-y-3">
                    {project.functionalities.map((functionality:any, funcIndex:any) => (
                      <li key={funcIndex} className="text-md text-quaternary  flex gap-3">
                        <CircleCheckBig color='green' />
                        {functionality}
                      </li>
                    ))}
                  </ul>
                  <div className='flex gap-5 mt-5 items-center justify-center'>
                    <button className="w-1/2 py-2 rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                      Invert it
                    </button>
                    <button className="w-1/2 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                      Invert it
                    </button>
                  </div>
                </div>
               
             
              </div>
  )
}

export default ProjectCard
