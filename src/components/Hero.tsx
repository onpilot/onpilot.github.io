import React from 'react';
import sx from './modules/Hero.module.css';
import { PlayCircle } from './elements/Icons';

const Hero = () => {
  return (
    <section className={sx.container}>
      <h1 className={sx.title}>👋 Hi, I'm Idan!</h1>
      <p className={sx.subtitle}>
        Frontend Developer / Self-taught designer / React.js Enthusiast
      </p>
      <div className={`ic-wrapper ic-lg ${sx.run}`}>
        <PlayCircle />
      </div>
      <div className={sx.display_wrapper}>
        <span className={sx.display_text}>Hello World</span>
      </div>
    </section>
  );
};

export default Hero;
