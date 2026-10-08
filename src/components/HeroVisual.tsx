import React from 'react';
import { portfolio } from '../data/portfolio';

export const HeroVisual: React.FC = () => {
  return (
    <div className="stage" aria-hidden="true">
      <div className="hero-ring" id="ring">
        <div className="face">
          <img
            src={portfolio.personal.profileImage}
            alt={portfolio.personal.fullName}
            loading="eager"
          />
        </div>
        <div className="face b">
          <img
            src={portfolio.personal.profileImage}
            alt={portfolio.personal.fullName}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
