import React from 'react';
import { portfolio } from '../data/portfolio';
import { HeroVisual } from './HeroVisual';
import { Button } from './UI/Button';

export const Hero: React.FC = () => {
  const allRoles = [...portfolio.hero.roles, portfolio.hero.roles[0]];

  return (
    <section id="home" aria-label="Hero Section">
      <HeroVisual />
      
      <div className="hero-t">
        <div className="hi">
          {portfolio.hero.greeting} <u>{portfolio.personal.firstName}</u>
        </div>
        
        <h1 className="role" id="role" aria-label={portfolio.hero.roles.join(', ')}>
          {allRoles.map((role, idx) => (
            <div key={`${role}-${idx}`}>{role}</div>
          ))}
        </h1>
        
        <p id="tagline">{portfolio.hero.tagline}</p>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" href="#projects">
            View Work
          </Button>
          <Button variant="secondary" href="#contact">
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="scrollhint" aria-hidden="true">
        ↓ SCROLL TO SCRUB TIMELINE
      </div>
    </section>
  );
};
