"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../../../../constants';


const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='py-5' style={{
        background: 'linear-gradient(to bottom,black,transparent)'
    }}>
        <nav className=" shadow-md ">
          <div className="max-w-7xl mx-auto px-4 flex flex-row flex-wrap justify-between">
            
              <div>
          
                <Link href="/" className="flex items-center w-full">
                  <img src="/logos/headerlogo.webp" style={{
                    objectPosition: "1.5px 1px"
                  }} className='h-16 w-16 bg-quaternary object-cover border-2 border-solid border-tertiary shadow-md shadow-tertiary   rounded-full' alt="logo" loading='lazy' />
                </Link>
              </div>
              
              <div className="flex items-center gap-6">
                {NAV_ITEMS.map((item:any) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-md ${pathname == item.href && 'bg-tertiary/80'}  font-medium text-quaternary`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          
        </nav>
    </header>
   
  )
}

export default Navbar
