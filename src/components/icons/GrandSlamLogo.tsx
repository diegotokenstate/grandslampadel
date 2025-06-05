import React from 'react';

interface LogoProps {
  className?: string;
}

export const GrandSlamLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://imgur.com/kQBBe3v.png"
      alt="GRAND SLAM PADEL Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};