import React from 'react';

interface LogoProps {
  className?: string;
}

export const GrandSlamLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://imgur.com/aGw0ftx.png"
      alt="GRAND SLAM PADEL Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};