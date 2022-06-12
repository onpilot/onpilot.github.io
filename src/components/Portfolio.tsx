import React from 'react';
import sx from './modules/Portfolio.module.css';

const Portfolio = () => {
  return (
    <section className={sx.container}>
      <div className={sx.spacer} />
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className={sx.box_wrapper}>
        <div className={sx.box}></div>
        <div className={sx.box}></div>
        <div className={sx.box}></div>
        <div className={sx.box}></div>
        <div className={sx.box}></div>
        <div className={sx.box}></div>
      </div>
    </section>
  );
};

export default Portfolio;
