"use client";
import SocialHandles from '@/app/components/shared/SocialHandles'
import { BackgroundLines } from '@/app/components/ui/background-lines'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const AboutPage = () => {

   const container = useRef<HTMLElement | null>(null);

   useGSAP(() => {
    
        gsap.from("h2,p,h3",{
            x: 200,
            duration: 0.8,
            opacity: 0
        })
        gsap.from("img",{
            x: -200,
            duration: 0.8,
            opacity: 0
        })
       
    
   },{scope: container})
   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

   },[])

    return (
        <section ref={container} className=" bg-black text-quaternary py-12">
            <BackgroundLines>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="flex gap-32 items-center laptop:gap-12 mobile:flex-col">

                        <div>
                            <img src="/logos/pfpfinal.webp" loading='lazy' className='w-full max-h-[32rem] laptop:max-h-[25rem]' alt="profile pic" />
                        </div>

                        <div className="w-1/2 space-y-6 mobile:w-full mobile:text-center">
                            <h2 className="text-5xl inline-block font-bold pb-2 border-b-4 border-tertiary tracking-wide tablet:text-2xl mobile:w-max-w-xl mobile:text-left mobile-sm:text-3xl mobile:mx-auto">
                                About Me:
                            </h2>


                            <p className="text-quaternary/80  leading-7 text-lg max-w-xl tablet:text-sm mobile:max-w-full mobile:leading-7">
                                Hello, my name is Fazal!
                                I am a passionate Web Developer and Freelancer from Gujarat, India. I am Currently in my third year of a B.C.A degree. I am specialized in designing and developing highly optimized, efficient, and fast websites, web applications and API's using modern frameworks like Next.js and the MERN stack.
                                <br />
                                <br />

                                Whether you need a fast, reliable website or a web app for your business or personal use, I can help bring your ideas to life. Let's work together to create something extraordinary!
                            </p>


                            {/* Social Links */}
                            <div className='flex gap-7 items-center mobile-sm:flex-col '>
                                <h3 className="text-3xl font-bold text-quaternary pt-4 laptop:text-lg tablet:text-sm mobile-sm:text-2xl mobile-sm:pt-1 mobile-sm:translate-y-4">Get in Touch:-</h3>
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
