import React from 'react';
import sx from './modules/Portfolio.module.css';
import ilustration from './../img/ilustration-milano-400.svg';
import { portfolio } from './data/portfolio';

const Portfolio = () => {
  return (
    <section className={sx.container}>
      <div className={sx.spacer} />
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className={sx.ilustration}>
        <img src={ilustration} alt='Ilustration' />
      </div>
      <div className={sx.box_wrapper}>
        {portfolio.map(({ id, title, tag, img, alt, url }) => (
          <a className={sx.box} href={url} key={id}>
            <h2>{title}</h2>
            <small>{tag}</small>
            <img src={img} alt={alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
