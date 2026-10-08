import React from 'react';

interface TagProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Tag: React.FC<TagProps> = ({ children, className = '', id }) => {
  return (
    <span id={id} className={`tag ${className}`.trim()}>
      {children}
    </span>
  );
};
