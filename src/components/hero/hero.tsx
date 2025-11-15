import React from 'react';

interface HeroProps {
  imageSrc: string;
  options?: {
    roundedBottom?: boolean;
    height?: string;
  };
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ imageSrc, options, children }) => {
  const heroClassName = options?.roundedBottom
    ? 'rounded-b-[50%] shadow-hero-shadow max-mobile:w-hero-mobile max-mobile:h-hero-mobile max-mobile:rounded-[1157.223px]'
    : '';

  const heroStyle = {
    height: options?.height || 'auto',
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className={`hero ${heroClassName} bg-cover bg-center`}
      style={heroStyle}
    >
      {children}
    </div>
  );
};

export default Hero;
