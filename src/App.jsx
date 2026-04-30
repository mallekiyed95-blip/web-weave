import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CurvedMarquee from './components/CurvedMarquee'
import ProjectGrid from './components/ProjectGrid'
import Services from './components/Services'
import ProcessSection from './components/ProcessSection'
import TechStack from './components/TechStack'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      document.body.style.backgroundColor = '#181818';
      document.body.style.color = '#FFFFFF';
    } else {
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#F8F6F0';
      document.body.style.color = '#1C1C1C';
    }
  }, [isDark]);

  return (
    <main className="font-sans" style={{ backgroundColor: isDark ? '#181818' : '#F8F6F0', color: isDark ? '#FFFFFF' : '#1C1C1C' }}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <CurvedMarquee isDark={isDark} />
      <ProjectGrid isDark={isDark} />
      <Services isDark={isDark} />
      <ProcessSection isDark={isDark} />
      <TechStack isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  )
}

export default App
