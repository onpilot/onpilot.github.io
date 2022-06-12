import React from 'react';
import sx from './modules/Footer.module.css';
import { links, mail } from './data/social';

type Props = {
  classname: string;
};

const Copyright = ({ classname }: Props) => {
  const year = new Date().getFullYear();
  const text = '© ' + year + ' Idan Abdillah';
  return <p className={classname}>{text}</p>;
};

const Footer = () => {
  return (
    <footer className={sx.container}>
      <div className={sx.inner_container}>
        <p>Interested in working together? I'd love to hear from you.</p>
        <div className={sx.ic_wrapper}>
          <ul>
            {links.map((e) => (
              <li key={e.name}>
                <a
                  className={sx.ic}
                  href={e.url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {e.ic}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={sx.mail}>
          <p className={sx.mail_text}>{mail}</p>
        </div>
        <Copyright classname={sx.copy} />
      </div>
    </footer>
  );
};

export default Footer;
