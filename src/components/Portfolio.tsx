import React from 'react';
import sx from './modules/Portfolio.module.css';
import ilustration from './../img/ilustration-milano-400.svg';
import { portfolio } from './data/portfolio';
import styled from 'styled-components';
import { ButtonLink } from './elements/ButtonLink';
import { extLink, code } from './elements/Icons';
import { enter, leave } from './events/toggleHidden';

const [ic_link, ic_code] = [extLink(), code()];

const StyledBox = styled.div<{ bgImg: string }>`
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
          <StyledBox
            className={sx.box}
            key={id}
            bgImg={bgImg}
            onMouseEnter={() => enter(`portfolio-btn-group-${id}`)}
            onMouseLeave={() => leave(`portfolio-btn-group-${id}`)}
          >
            <h2 className={sx.box__title}>{title}</h2>
            <small className={sx.box__tag}>{tag}</small>
            <div
              id={`portfolio-btn-group-${id}`}
              className={`${sx.box__button_group} hidden`}
            >
              {url.live ? (
                <>
                  <ButtonLink href={url.code} icon={ic_code}>
                    code
                  </ButtonLink>
                  <ButtonLink href={url.live} icon={ic_link}>
                    live
                  </ButtonLink>
                </>
              ) : (
                <ButtonLink>Coming Soon</ButtonLink>
              )}
            </div>
            <div className={sx.box__icon}>{ic}</div>
          </StyledBox>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
