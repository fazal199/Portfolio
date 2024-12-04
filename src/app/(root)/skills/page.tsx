
import Heading from '@/app/components/shared/Heading'
import React, { memo } from 'react'
import { SKILL_CATEGORIES } from '../../../../constants'
import Image from 'next/image'


const SkillCard = ({ skill }: any) => (


    <div className="flex cursor-pointer items-center bg-quaternary rounded-lg shadow-md shadow-tertiary  p-3 transition-all duration-300 hover:shadow-lg hover:shadow-white hover:-translate-y-1 mobile-sm:p-2">
       <div>
            <Image
                loading='lazy'
                src={skill.src}
                alt={skill.name}
                width={40}
                height={40}
                className="mr-3 object-contain mobile-sm:mr-2"
            />
       </div>
        <span className="text-primary font-bold mobile-sm:text-xs">{skill.name}</span>
    </div>
)


const SkillsPage = () => {

   
    return (
        <section  className='border-2 py-10 slight-border mobile-sm:border mobile-sm:mt-3'>
            <div className="py-10 px-4 bg-secondary  max-w-[95vw] mx-auto">
                <Heading isAnimated={false} content="My Top Skills" />
                <div className='mt-10 space-y-12'>
                    {SKILL_CATEGORIES.map((category, index) => (
                        <div key={index} className="bg-primary slight-border slight-shadow rounded-lg shadow-xl p-6 transition-all duration-300 hover:shadow-2xl">
                            <h3 className="text-2xl font-semibold text-quaternary mb-6 pb-3 border-b border-tertiary">
                                {category.title}
                            </h3>
                            <div className="flex gap-5 flex-wrap">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillCard key={skillIndex} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(SkillsPage)
