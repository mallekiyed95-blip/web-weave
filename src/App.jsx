import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurvedMarquee from './components/CurvedMarquee'
import ProjectGrid from './components/ProjectGrid'
import ProcessSection from './components/ProcessSection'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <CurvedMarquee />
      <ProjectGrid />
      <ProcessSection />
      <TechStack />
      <Footer />
    </main>
  )
}

export default App
