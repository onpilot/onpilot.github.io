import React from 'react';
import sx from './modules/Footer.module.css';
import { links, mail } from './data/social';
import Sign from './elements/Sign';

type Props = {
  classname: string;
};

const Copyright = ({ classname }: Props) => {
  const year = new Date().getFullYear();
  const text = '© ' + year + ' Wildan F. Abdillah';
  return <p className={classname}>{text}</p>;
};

const Footer = () => {
  return (
    <footer className={sx.container}>
      <div className={sx.inner_container}>
        <p>Interested in working together? I'd love to hear from you.</p>
        <div className={`ic-wrapper ${sx.links}`}>
          <ul>
            {links.map(({ name, url, ic }) => (
              <li key={name}>
                <a
                  className={`ic-md ${sx.ic}`}
                  href={url}
                  target='_blank'
                  rel='noreferrer'
                >
                  {ic}
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
      <Sign />
    </footer>
  );
};

export default Footer;
