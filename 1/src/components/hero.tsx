import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section>
      <img src={'/hero.png'} alt='hero' width={1440} height={450} className='hidden w-full sm:block' />
      <img src={'/hero-2.png'} alt='hero' width={376} height={314} className='block w-full sm:hidden' />
    </section>
  );
};

export default HeroSection;
