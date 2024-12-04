"use client";
import React, { useEffect } from 'react'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const LenisWrapper = ({ children }: {

    children: React.ReactNode;

}) => {

    useEffect(() => {
        // Initialize a new Lenis instance for smooth scrolling
        const lenis = new Lenis({});

        function raf(time: any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
        // This ensures Lenis's smooth scroll animation updates on each GSAP tick
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });

        // Disable lag smoothing in GSAP to prevent any delay in scroll animations
        gsap.ticker.lagSmoothing(0);



    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default LenisWrapper
