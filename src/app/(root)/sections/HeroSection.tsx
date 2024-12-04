"use client";
import { BackgroundLines } from '@/app/components/ui/background-lines'
import Link from 'next/link'
import TypeWriter from '@/app/components/shared/TypeWriter'
import {TYPEWRITER_HERO } from '../../../../constants'
import SocialHandles from '@/app/components/shared/SocialHandles'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';



export default function HeroSection() {

  const container = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 0.8,
      });

      tl.from("h1,h1 + div,p,.gsp-hero-btn", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.5
      }, "same")

      tl.from(".gsp-icon", {
        opacity: 0,
        stagger: 0.2,
        duration: 0.5
      }, "same")

      tl.from("img", {
        x: 50,
        opacity: 0,
        duration: 0.5
      }, "same")




    },
    { scope: container }
  ); 



  return (
    <section ref={container} className=" bg-black text-quaternary py-6">
      <BackgroundLines>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex gap-16 items-center mobile:flex-col-reverse mobile-md:gap-8">
            {/* Left Column - Main Content */}
            <div className="w-1/2 space-y-6  laptop:space-y-5 tablet:space-y-4 mobile:w-full mobile:text-center mobile:space-y-5">
              <h1 className="text-6xl font-bold laptop:text-5xl tablet:text-4xl">
                Hi, It's <span className="text-quaternary">Fazal</span>
              </h1>

              <div className={`text-3xl font-bold mt-8 text-white laptop:text-xl tablet:text-xl`}><span className='inline-block'>I am a</span>
                <TypeWriter className="text-3xl inline-block ml-3 laptop:text-xl tablet:text-xl mobile-md:ml-1" strings={TYPEWRITER_HERO} />
              </div>
              <p className="text-quaternary/80 max-w-xl tablet:text-sm mobile:text-center mobile:mx-auto mobile:leading-7">
                I create Websites and Web-Apps for Businesses and Individuals.
                
              </p>
              <div className='flex gap-5 items-center   mobile:justify-center'>
                <Link className='gsp-hero-btn' href={"/about"}>
                  <button className="px-8 py-2 rounded-md  bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary tablet:text-sm">
                    About
                  </button>
                </Link>
                <Link className='gsp-hero-btn' href={"/contact"}>
                  <button className="px-8 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent tablet:text-sm">
                    Contact
                  </button>
                </Link>
              </div>

              {/* Social Links */}
              <SocialHandles containerClassName="mobile:justify-center"/>
           
            </div>

            {/* Right Column - Circular Image */}
            <div>
              <img loading='lazy' src="/logos/pfpfinal.webp" className='w-full max-h-[32rem] tablet:max-h-[28rem] mobile:max-h-[20rem] mobile-sm:max-h-72' alt="profile pic" />
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}

