import { BackgroundLines } from '@/app/components/ui/background-lines'
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import TypeWriter from '@/app/components/shared/TypeWriter'
import { TYPEWRITER_HERO } from '../../../../constants'


export default function HeroSection() {
  return (
    <section className=" bg-black text-quaternary py-12">
      <BackgroundLines>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="w-1/2 space-y-6">
              <h1 className="text-6xl font-bold">
                Hi, It's <span className="text-quaternary">Fazal</span>
              </h1>

              <div className={`text-3xl font-bold mt-8 text-white`}><span className='inline-block'>I am a</span>
                <TypeWriter className="text-3xl inline-block ml-3" strings={TYPEWRITER_HERO} />
              </div>
              <p className="text-quaternary/80 max-w-xl">
                I create websites and web apps for businesses and individuals.
              </p>
              <div className='flex gap-5 items-center'>
                <button className="px-8 py-2 rounded-md bg-tertiary  text-quaternary font-bold transition duration-200 hover:bg-transparent  border-2 border-transparent hover:border-tertiary">
                  Invert it
                </button>
                <button className="px-8 py-2 rounded-md bg-transparent  text-tertiary font-bold transition duration-200 hover:bg-tertiary  border-2 border-quaternary hover:text-quaternary hover:border-transparent">
                  Invert it
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-8 pt-4">
                <Link href="#" className="hover:scale-110 border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:scale-110 border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:scale-110 border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:scale-110 border-2 border-solid border-tertiary p-4 shadow-md shadow-tertiary rounded-full transition-transform">
                  <Mail className="w-6 h-6" />
                 
                </Link>
              </div>
            </div>

            {/* Right Column - Circular Image */}
            <div>
              <img src="/logos/pfphero.png" className='w-full max-h-[32rem]' alt="profile pic" />
            </div>
          </div>
        </div>
      </BackgroundLines>
    </section>
  )
}

