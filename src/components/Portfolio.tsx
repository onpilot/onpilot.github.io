import React from 'react';
import sx from './modules/Portfolio.module.css';
import ilustration from './../img/ilustration-milano-400.svg';
import { portfolio } from './data/portfolio';
import styled from 'styled-components';

const StyledBox = styled.a<{ bgImg: string }>`
  background-image: ${(props) => props.bgImg};
`;

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
        {portfolio.map(({ id, title, tag, ic, url, bgImg }) => (
          <StyledBox className={sx.box} href={url} key={id} bgImg={bgImg}>
            <h2 className={sx.box__title}>{title}</h2>
            <small className={sx.box__tag}>{tag}</small>
            <div className={sx.box__icon}>{ic}</div>
          </StyledBox>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
