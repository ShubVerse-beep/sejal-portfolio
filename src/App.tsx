import { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { portfolio } from './data/portfolio';
import { useGsapInit } from './hooks/useGsap';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize GSAP scroll triggers and timelines once the loader completes
  useGsapInit(isLoaded, portfolio.hero.roles.length);

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
