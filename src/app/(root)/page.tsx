import React from 'react'
import { BackgroundLines } from '../components/ui/background-lines'
import HeroSection from './sections/HeroSection'
import RecentProjects from './sections/RecentProjectsSection'
import ServicesSection from './sections/ServicesSection'

const HomePage = () => {
  return (
    <>
     <HeroSection/>
     <RecentProjects/>
     <ServicesSection/>
    </>
  )
}

export default (HomePage)
