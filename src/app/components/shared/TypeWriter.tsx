"use client"
import React from 'react'
import TypeWriterText from 'typewriter-effect'


const TypeWriter = ({className,strings}:any) => {
  return (
    <div className={`${className}`}>
        <TypeWriterText options={{
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: "text-tertiary",
        }} />
    </div>
  )
}

export default TypeWriter
