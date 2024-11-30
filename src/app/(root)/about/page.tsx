import SocialHandles from '@/app/components/shared/SocialHandles'
import { BackgroundLines } from '@/app/components/ui/background-lines'
import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <section className=" bg-black text-quaternary py-12">
            <BackgroundLines>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex gap-32 items-center">

                        <div>
                            <img src="/logos/pfpfinal2.png" className='w-full max-h-[32rem]' alt="profile pic" />
                        </div>

                        <div className="w-1/2 space-y-6">
                            <h1 className="text-5xl inline-block font-bold pb-2 border-b-4 border-tertiary tracking-wide">
                                About Me:
                            </h1>


                            <p className="text-quaternary/80  leading-7 text-lg max-w-xl">
                                Hello, my name is Fazal!
                                I am a passionate Web Developer and Freelancer from Gujarat, India. I am Currently in my third year of a B.C.A degree. I am specialized in designing and developing highly optimized, efficient, and fast websites, web applications and API's using modern frameworks like Next.js and the MERN stack.
                                <br />
                                <br />

                                Whether you need a fast, reliable website or a web app for your business or personal use, I can help bring your ideas to life. Let's work together to create something extraordinary!
                            </p>


                            {/* Social Links */}
                            <div className='flex gap-7 items-center'>
                                <h2 className="text-3xl font-bold text-quaternary pt-4">Get in Touch:-</h2>
                                <SocialHandles/>
                            </div>
                        </div>

                    </div>
                </div>
            </BackgroundLines>
        </section>
    )
}

export default AboutPage
