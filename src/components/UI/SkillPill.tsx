import React from 'react';

interface SkillPillProps {
  name: string;
  className?: string;
}

export const SkillPill: React.FC<SkillPillProps> = ({ name, className = '' }) => {
  return (
    <span className={`pill ${className}`.trim()}>
      {name}
    </span>
  );
};
