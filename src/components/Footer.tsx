import React from 'react';
import { portfolio } from '../data/portfolio';

export const Footer: React.FC = () => {
  return (
    <footer role="contentinfo">
      <div className="meta">
        <div>
          <b>// System Architecture</b>
          <span id="fa">{portfolio.personal.role}</span>
        </div>
        <div>
          <b>// Status</b>
          <span style={{ color: '#34d399' }}>Open to Opportunities</span>
        </div>
        <div>
          <b>// Region</b>
          <span id="reg">{portfolio.personal.region}</span>
        </div>
        <a href="#home" aria-label="Back to top of page">
          Back to top ↑
        </a>
      </div>

      <div className="big" id="fbig" aria-hidden="true">
        {portfolio.personal.firstName.toUpperCase()}
      </div>
    </footer>
  );
};
