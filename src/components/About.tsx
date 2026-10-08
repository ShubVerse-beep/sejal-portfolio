import React from 'react';
import { portfolio } from '../data/portfolio';
import { Tag } from './UI/Tag';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Me">
      <div className="about">
        <div className="pcard rv" id="pcard">
          <img
            src={portfolio.personal.profileImage}
            alt={portfolio.personal.fullName}
            loading="lazy"
          />
          <em>{portfolio.about.statusBadge}</em>
        </div>

        <div className="rv">
          <Tag>{portfolio.about.badge}</Tag>
          <h2>
            Hello, I'm <span>{portfolio.personal.fullName}</span>
          </h2>
          <p className="sub" id="bio">
            {portfolio.about.bio}
          </p>

          <div className="stats" id="stats">
            {portfolio.about.stats.map((stat, idx) => (
              <div className="stat" key={idx}>
                <b>{stat.value}</b>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
