import { upwork, linkedin, github, twitter } from '../elements/Icons';

const [up, li, gh, tw] = [upwork(), linkedin(), github(), twitter()];

// TODO: Upwork link
export const links = [
  { name: 'twitter', ic: tw, url: 'https://twitter.com/onpilot_' },
  { name: 'github', ic: gh, url: 'https://github.com/onpilot' },
  { name: 'upwork', ic: up, url: '/' },
  { name: 'linkedin', ic: li, url: 'https://www.linkedin.com/in/onpilot' },
];

export const mail = 'idan@onpilot@gmail.com';
