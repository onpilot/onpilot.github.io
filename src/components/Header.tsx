import React from 'react';
import sx from './modules/Header.module.css';
import { Logo } from './elements/Logo';
import { ButtonLink } from './elements/ButtonLink';
import { Moon, MenuRightAlt } from './elements/Icons';

const page = [
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Portfolio', url: '/portfolio' },
];

const Header = () => {
  return (
    <header className={sx.container}>
      <div className={sx.menu_wrapper}>
        <a href='/' className={sx.logo} aria-label='Idan Abdillah homepage'>
          <Logo />
        </a>
        <nav>
          <ul className={sx.menu_left}>
            {page.map(({ name, url }) => (
              <li className={sx.menu_left__list} key={name}>
                <a href={url}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={sx.menu_right}>
          <ButtonLink href=''>Merch</ButtonLink>
          <div className={`ic-wrapper ${sx.ic_btn}`}>
            <button className='ic-sm'>
              <Moon />
            </button>
            <button className='ic-sm'>
              <MenuRightAlt />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
