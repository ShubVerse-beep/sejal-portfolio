import React from 'react';
import { portfolio } from '../data/portfolio';
import { Tag } from './UI/Tag';
import { GlassCard } from './UI/GlassCard';

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" aria-label="Core Expertise">
      <Tag className="rv">// Core execution root map</Tag>
      <h2 className="rv">What I Do</h2>
      
      <div className="grid4" id="exp">
        {portfolio.expertise.map((item, idx) => (
          <GlassCard key={item.id} className="rv">
            <small>// ROOT 0{idx + 1}</small>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
              {item.tags.map((chip, chipIdx) => (
                <span className="chip" key={chipIdx}>
                  {chip}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
