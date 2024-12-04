import React from 'react'
import Navbar from '../components/shared/Navbar';
import LenisWrapper from '../lib/lensi/LenisWrapper';

const RootLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <LenisWrapper>
        <Navbar/>
        <main>{children}</main>
        <footer className='text-quaternary text-center py-5 text-lg font-semibold slight-border border-tertiary'>
          <p>&copy; 2024 <span className='text-tertiary'>Fazal Hussain</span> | All Right Reserved!</p>
        </footer>
    </LenisWrapper>
     
    </>
  )
}

export default RootLayout
