import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
  id?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'secondary',
  href,
  onClick,
  className = '',
  style,
  type = 'button',
  id,
  target,
  rel,
}) => {
  const classes = `btn ${variant === 'primary' ? 'p' : ''} ${className}`.trim();

  if (href) {
    return (
      <a
        id={id}
        href={href}
        className={classes}
        style={style}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
