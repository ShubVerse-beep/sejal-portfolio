import React from 'react';
import { portfolio } from '../data/portfolio';
import { Tag } from './UI/Tag';
import { GlassCard } from './UI/GlassCard';
import { ExternalLink, Github, Award } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" aria-label="Featured Projects">
      <Tag className="rv">// Portfolio work</Tag>
      <h2 className="rv">Featured Engineering Projects</h2>

      <div className="grid4" id="proj">
        {portfolio.projects.map((proj, idx) => (
          <GlassCard key={idx} className="rv">
            <small>// PROJECT 0{idx + 1}</small>
            <span className="status">
              ● {proj.status || 'ACTIVE'}
            </span>
            
            <h3>{proj.title}</h3>
            
            {proj.award && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#fbbf24',
                  fontSize: '11px',
                  fontFamily: '"JetBrains Mono", monospace',
                  margin: '4px 0 8px',
                  fontWeight: 600,
                }}
              >
                <Award size={13} />
                <span>{proj.award}</span>
              </div>
            )}

            <p>{proj.description}</p>
            
            <div>
              {proj.technologies.map((tech, techIdx) => (
                <span className="chip" key={techIdx}>
                  {tech}
                </span>
              ))}
            </div>

            {(proj.github || proj.live) && (
              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <Github size={12} />
                    <span>GitHub</span>
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    aria-label={`Visit live demo for ${proj.title}`}
                  >
                    <ExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
