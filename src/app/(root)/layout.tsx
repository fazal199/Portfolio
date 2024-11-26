import React from 'react'
import Navbar from '../components/shared/Navbar';

const RootLayout = ({children}:Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      
     
    </>
  )
}

export default RootLayout
