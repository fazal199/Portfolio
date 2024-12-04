"use client"
import React, { memo } from 'react'
import TypeWriterText from 'typewriter-effect'


const TypeWriter = ({className,strings}:{className: string,strings: Array<string>}) => {
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

export default memo(TypeWriter)
