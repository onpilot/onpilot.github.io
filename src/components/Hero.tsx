import React from 'react';
import sx from './modules/Hero.module.css';
import { PlayCircle, DoubleQuoteR } from './elements/Icons';

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
        <div className={sx.display_quotes}>
          <div className='ic-sm'>
            <DoubleQuoteR />
          </div>
          <div className={sx.quote}>
            <p>Quotes of the day</p>
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis veniam nisi, recusandae dolorem at expedita quo.
            </small>
          </div>
        </div>
        <p className={sx.display_text}>Hello World</p>
      </div>
    </section>
  );
};

export default Hero;
