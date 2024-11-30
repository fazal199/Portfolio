import Link from 'next/link'
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
const ProjectCard = ({ project }: any) => {
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
            {project.tags.map((tag: any, tagIndex: any) => (
              <span key={tagIndex} className="text-quaternary box-border border-2 border-solid border-tertiary px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl mt-5 font-semibold mb-2 text-quaternary">{project.title}</h3>
          <ul className="my-4 space-y-3">
            {project.functionalities.map((functionality: any, funcIndex: any) => (
              <li key={funcIndex} className="text-md text-quaternary  flex gap-2">
               <FaCheckCircle className='h-6 w-6 text-green-500'/>
                {functionality}
              </li>
            ))}
          </ul>
          <div className='grid grid-cols-2 gap-3 mt-5'>
            <Link href={`/detail/${project.id}`}>
              <button className=" py-2 w-full rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                More
              </button>
            </Link>
            <Link href={project.liveLink}>
              <button className=" flex w-full items-center justify-center gap-1 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                Preview <ImArrowUpRight2 className='text-quaternary h-4 w-4'/>
              </button>
            </Link>
          </div>
        </div>


      </div>
   
  )
}

export default ProjectCard
