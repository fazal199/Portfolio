"use client";
import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FREELANCE_EMAIL } from '../../../../constants';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const SocialHandles = ({
    containerClassName 
}:any) => {


  return (
    <div className={`flex pt-4 gap-8 laptop:gap-6 laptop:pt-3 tablet:gap-4 ${containerClassName}`}>
    <Link target="_blank" href={"https://github.com/fazal199"} className=" gsp-icon border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
    <FaGithub className='h-6 w-6    text-quaternary laptop:h-5 laptop:w-5' />
    </Link>
    <Link target="_blank" href="https://x.com/fazal_huss82091" className=" gsp-icon border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
      <FaXTwitter className='h-6 w-6  text-quaternary laptop:h-5 laptop:w-5'/>
    </Link>
    <Link target="_blank" href="https://www.linkedin.com/in/fazal-hussain12/" className=" gsp-icon border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
      <FaLinkedinIn className="w-6  h-6 text-quaternary laptop:h-5 laptop:w-5" />
    </Link>
    <Link target="_blank" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${FREELANCE_EMAIL}`} className=" gsp-icon border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
      <SiGmail className="w-6 h-6   text-quaternary laptop:h-5 laptop:w-5" />
    </Link>
  </div>
  )
}

export default SocialHandles
