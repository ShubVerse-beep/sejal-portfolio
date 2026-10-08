import React from 'react';
import { portfolio } from '../data/portfolio';
import { Tag } from './UI/Tag';
import { SkillPill } from './UI/SkillPill';

export const Skills: React.FC = () => {
  const sk = portfolio.skills;
  const half = Math.ceil(sk.length / 2);
  const row1 = [...sk.slice(0, half), ...sk.slice(0, half), ...sk.slice(0, half)];
  const row2 = [...sk.slice(half), ...sk.slice(half), ...sk.slice(half)];

  return (
    <section id="skills" aria-label="Skills & Technologies">
      <div className="rv">
        <Tag>● Technical stack</Tag>
        <h2>Technologies I Work With</h2>
        <p className="sub" style={{ margin: '0 auto' }}>
          Full-stack expertise across modern app development, interaction design, and real-world software engineering.
        </p>
      </div>

      <div id="rows" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="row skills-row" style={{ willChange: 'transform' }}>
          {row1.map((item, idx) => (
            <SkillPill key={`r1-${item}-${idx}`} name={item} />
          ))}
        </div>
        <div className="row skills-row" style={{ willChange: 'transform' }}>
          {row2.map((item, idx) => (
            <SkillPill key={`r2-${item}-${idx}`} name={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
