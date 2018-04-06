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
    language: 'misc',
    pinned: true,
  },
  {
    caption: 'aws-vapor',
    infoLink: 'https://github.com/ohtomi/aws-vapor',
    language: 'python',
    pinned: true,
  },
  {
    caption: 'mac-os-x-setup',
    infoLink: 'https://github.com/ohtomi/mac-os-x-setup',
    language: 'misc',
    pinned: false,
  },
  {
    caption: 'homebrew-repos',
    infoLink: 'https://github.com/ohtomi/homebrew-repos',
    language: 'misc',
    pinned: false,
  },
  {
    caption: 'ansible-role-jenkins2',
    infoLink: 'https://github.com/ohtomi/ansible-role-jenkins2',
    language: 'misc',
    pinned: false,
  },
  {
    caption: 'ansible-role-nexus3',
    infoLink: 'https://github.com/ohtomi/ansible-role-nexus3',
    language: 'misc',
    pinned: false,
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
