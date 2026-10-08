import React from 'react';
import { portfolio } from '../data/portfolio';

export const Navbar: React.FC = () => {
  return (
    <nav role="navigation" aria-label="Main navigation">
      <b id="logo">
        <a href="#home">
          {portfolio.personal.firstName}
          <span>.</span>
        </a>
      </b>
      <ul className="mono">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expertise">Expertise</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a
        className="btn p"
        href="#contact"
        style={{ padding: '9px 18px' }}
      >
        Hire Me
      </a>
    </nav>
  );
};
