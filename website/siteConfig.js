const users = []
const products = [
  {
    caption: 'gomoku',
    infoLink: 'https://github.com/ohtomi/gomoku',
    language: 'go',
    pinned: true,
  },
  {
    caption: 'scrapbox',
    infoLink: 'https://github.com/ohtomi/scrapbox',
    language: 'go',
    pinned: true,
  },
  {
    caption: 'react-whiteboard',
    infoLink: 'https://github.com/ohtomi/react-whiteboard',
    language: 'javascript',
    pinned: true,
  },
  {
    caption: 'react-handsontable-hoc',
    infoLink: 'https://github.com/ohtomi/react-handsontable-hoc',
    language: 'javascript',
    pinned: true,
  },
  {
    caption: 'lazybones-templates',
    infoLink: 'https://github.com/ohtomi/lazybones-templates',
    language: 'others',
    pinned: true,
  },
  {
    caption: 'aws-vapor',
    infoLink: 'https://github.com/ohtomi/aws-vapor',
    language: 'python',
    pinned: true,
  },
]

const siteConfig = {
  title: 'ohtomi open source software',
  tagline: '',
  url: 'https://ohtomi.github.io',
  baseUrl: '/',
  organizationName: 'ohtomi',
  projectName: 'ohtomi.github.io',
  noIndex: false,
  users,
  products,
  headerLinks: [
    { doc: 'products', label: 'Products' },
    { doc: 'demo', label: 'Demo' },
    { blog: true, label: 'Blog' },
    { href: "https://github.com/ohtomi", label: "GitHub" },
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: 'Copyright © ' + new Date().getFullYear() + ' Kenichi Ohtomi',
  highlight: {
    theme: 'atom-one-dark',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  twitter: 'true',
  disableTitleTagline: true,
  onPageNav: 'separate',
}

module.exports = siteConfig
