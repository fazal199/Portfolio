"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../../../../constants';
import { memo, useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap, { TimelineLite } from 'gsap';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
    const container = useRef<HTMLElement | null>(null);
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const mobileTimelineRef = useRef<TimelineLite>();


    //   gsap code for mobile open and close
    const { contextSafe } = useGSAP(() => {

        mobileTimelineRef.current = gsap.timeline({ paused: true });

        mobileTimelineRef.current.to(".gsp-mobile", {
            x: 0,
            opacity: 1,
            duration: 0.5
        })

        mobileTimelineRef.current.from(".gsp-mobile li", {
            y: 20,
            opacity: 0,
            duration: 0.5
        })


    }, { scope: container, dependencies: [] })


    const handleChangeNavigation = contextSafe(() => {
         setIsOpen(false);
         mobileTimelineRef.current?.reverse();
    })
    const handleNavigation = contextSafe(() => {
        if (!isOpen)
            mobileTimelineRef.current?.play();

        else
            mobileTimelineRef.current?.reverse();

        setIsOpen(!isOpen);

    })
    return (
        <>
            <header ref={container} className='py-2 sticky top-0 z-50 !bg-primary hidden mobile-md:block mobile-md:shadow-md mobile-md:shadow-tertiary' style={{
                background: 'linear-gradient(to bottom,black 30%,transparent)'
            }}>
                <nav>
                    <div className="max-w-7xl mx-auto flex flex-row flex-wrap justify-between px-8 py-2 items-center">

                        <div className='relative'>

                            <Link href="/" className="flex items-center w-full">
                                <img src="/logos/headerlogo.webp" style={{
                                    objectPosition: "1.5px 1px"
                                }} className='h-16 w-16 bg-quaternary object-cover border-2 border-solid border-tertiary shadow-md shadow-tertiary   rounded-full' alt="logo" loading='lazy' />
                            </Link>
                        </div>

                        {isOpen && <IoClose onClick={handleNavigation} className='block text-primary bg-quaternary p-1 rounded-md cursor-pointer font-semibold h-10 w-10 active:bg-tertiary' />}
                        {!isOpen && <RxHamburgerMenu onClick={handleNavigation} className=' block text-primary bg-quaternary p-1 rounded-md cursor-pointer font-semibold h-10 w-10 active:bg-tertiary' />}
                        <ul className="flex left-0 pt-12 items-center gsp-mobile absolute flex-col gap-12 bg-primary w-full top-24 h-screen -translate-x-[120rem]">
                            {NAV_ITEMS.map((item: any) => (
                                <li key={item.name}>
                                    <Link
                                        onClick={handleChangeNavigation}
                                        href={item.href}
                                        className={`px-3 py-2  font-semibold tracking-wide rounded-md text-md ${pathname == item.href && 'bg-tertiary/80'}  font-medium text-quaternary`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </nav>
            </header>

        </>

    )
}

export default memo(MobileNav)

