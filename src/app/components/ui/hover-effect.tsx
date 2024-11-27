"use client";

import { cn } from "@/app/lib/utils";
import { CircleCheckBig } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const HoverEffect = ({


    items,

    className,
}: any) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto",
                className
            )}
        >
            {items.map((item, idx) => (
                <div

                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute -z-10 h-full w-full bg-white/35 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                        
                    </AnimatePresence>
                    <div key={idx} className="bg-primary z-10 rounded-lg slight-shadow slight-border  overflow-hidden">
                <img
                  loading='lazy'
                  src={item.image}
                  alt={item.title}
                
                  className="w-full min-h-56 object-cover object-center"

                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-quaternary box-border border-2 border-solid border-tertiary px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl mt-5 font-semibold mb-2 text-quaternary">{item.title}</h3>
                  <ul className="my-4 space-y-3">
                    {item.functionalities.map((functionality, funcIndex) => (
                      <li key={funcIndex} className="text-md text-quaternary  flex gap-3">
                        <CircleCheckBig color='green'/>
                        {functionality}
                      </li>
                    ))}
                  </ul>
                <div className='flex gap-5 mt-5 items-center justify-center'>
                <button className="w-1/2 py-2 rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                  Invert it
                </button>
                <button className="w-1/2 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                  Invert it
                </button>
              </div>
                </div>
              </div>
                </div>
            ))}
        </div>
    );
};