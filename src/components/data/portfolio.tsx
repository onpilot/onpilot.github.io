import {
  rocket,
  react,
  timer,
  calculator,
  markdown,
  disc,
} from '../elements/Icons';

export const [ic_1, ic_2, ic_3, ic_4, ic_5, ic_6] = [
  rocket(),
  react(),
  timer(),
  calculator(),
  markdown(),
  disc(),
];

// TODO: Web design & development link
export const portfolio = [
  {
    id: 1,
    title: 'Web Design & Development',
    tag: 'website, landing-page',
    ic: ic_1,
    url: { code: '', live: '' },
    bgImg: 'var(--grad1)',
  },
  {
    id: 2,
    title: 'React Dictionary',
    tag: 'freedictionary-api, rest, mui, dark-mode',
    ic: ic_2,
    url: {
      code: 'https://github.com/onpilot/react-dictionary-mui',
      live: 'https://onpilot.github.io/react-dictionary-mui',
    },
    bgImg: 'var(--grad2)',
  },
  {
    id: 3,
    title: '25 + 5 Clock',
    tag: 'pomodoro, cra, styled-components, ui, ux',
    ic: ic_3,
    url: {
      code: 'https://github.com/onpilot/js-pomodoro',
      live: 'https://onpilot.github.io/js-pomodoro/',
    },
    bgImg: 'var(--grad3)',
  },
  {
    id: 4,
    title: 'Calculator',
    tag: 'cra, styled-components, ui, ux',
    ic: ic_4,
    url: {
      code: 'https://github.com/onpilot/js-calculator',
      live: 'https://onpilot.github.io/js-calculator/',
    },
    bgImg: 'var(--grad4)',
  },
  {
    id: 5,
    title: 'Markdown Previewer',
    tag: 'html-to-markdown, marked.js, dom-purify',
    ic: ic_5,
    url: {
      code: 'https://github.com/onpilot/markdown-previewer',
      live: 'https://onpilot.github.io/markdown-previewer/',
    },
    bgImg: 'var(--grad5)',
  },
  {
    id: 6,
    title: 'Lofi Music Machine',
    tag: 'keyboard-events, jsdelivr, gh-repo-to-cdn',
    ic: ic_6,
    url: {
      code: 'https://github.com/onpilot/lofi-music-machine',
      live: 'https://onpilot.github.io/lofi-music-machine/',
    },
    bgImg: 'var(--grad6)',
  },
];
