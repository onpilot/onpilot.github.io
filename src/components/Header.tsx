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
      <a href='/' className={sx.logo} aria-label='Idan Abdillah homepage'>
        <Logo />
      </a>
      <nav>
        <ul className={sx.menu}>
          {page.map((e) => (
            <li className={sx.menu_list} key={e.name}>
              <a href={e.url}>{e.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={sx.menu_right}>
        <ButtonLink href=''>Merch</ButtonLink>
        <div className={`ic-wrapper ${sx.ic_btn}`}>
          <button>
            <Moon />
          </button>
          <button>
            <MenuRightAlt />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
