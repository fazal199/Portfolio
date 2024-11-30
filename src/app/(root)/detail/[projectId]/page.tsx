import React from 'react'
import { PROJECTS } from '../../../../../constants';
import Link from 'next/link';
import { ImArrowUpRight2 } from "react-icons/im";
import { BiCode } from 'react-icons/bi';
const ProjectDetail = async ({ params }: any) => {


    const projectId = (await params).projectId;
    const projectData = PROJECTS[projectId - 1];



    return (
        <section className='border-2 py-10 slight-border'>
            <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto">

                <div className="grid grid-cols-2 gap-16 mt-12 max-w-[90vw] mx-auto">
                    <div>
                        <img src={projectData.image} className='w-full rounded-md object-cover object-[top_left] h-full slight-border shadow-md shadow-tertiary' alt="profile pic" />
                    </div>

                    <div className=" space-y-6">
                        <h1 className="text-3xl inline-block font-bold pb-2 border-b-4 border-tertiary tracking-wide">
                            {projectData.title}
                        </h1>
                        <div className='flex gap-4'>
                            <p className='font-bold text-lg'> Tech Used:-</p>
                            <div className='flex gap-3 flex-wrap' >
                                {
                                    projectData.tags.map(tag => (
                                        <span key={tag} className="text-quaternary font-semibold box-border border-2 border-solid border-tertiary px-2 py-1 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))
                                }


                            </div>
                        </div>

                        <p className="text-quaternary/80  leading-7 text-lg">
                          {projectData.description}
                        </p>
                        <div className='grid grid-cols-2 gap-4'>
                            <Link href={projectData.codeLink}>
                                <button className="flex items-center justify-center gap-1 w-full py-2 rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                                    Code <BiCode className='h-6 w-6 '/>
                                </button>
                            </Link>
                            <Link href={projectData.liveLink}>
                                <button className="flex w-full items-center justify-center gap-1 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                                    Preview <ImArrowUpRight2 className='h-4 w-4 text-quaternary'/>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ProjectDetail
