import React from 'react';
import style from './section.module.css';

const Section = ({ children }: any) => {
  return <section className={style.section}>{children}</section>;
};

export default Section;
