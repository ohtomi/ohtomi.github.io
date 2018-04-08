const users = []
const products = [
  {
    name: 'gomoku',
    repository: 'https://github.com/ohtomi/gomoku',
    language: 'go',
    category: 'tool',
    description: 'gomoku can help you make a HTTP server written in your favorite languages.',
    demo: '',
    pinned: true,
  },
  {
    name: 'scrapbox',
    repository: 'https://github.com/ohtomi/scrapbox',
    language: 'go',
    category: 'tool',
    description: 'This tool provides command line interface for scrapbox.io.',
    demo: '',
    pinned: true,
  },
  {
    name: 'react-whiteboard',
    repository: 'https://github.com/ohtomi/react-whiteboard',
    language: 'javascript',
    category: 'library',
    description: 'A whiteboard React component using SVG.',
    demo: 'react-whiteboard.html',
    pinned: true,
  },
  {
    name: 'react-handsontable-hoc',
    repository: 'https://github.com/ohtomi/react-handsontable-hoc',
    language: 'javascript',
    category: 'library',
    description: 'A higher order component for react-handsontable.',
    demo: 'react-handsontable-hoc.html',
    pinned: true,
  },
  {
    name: 'lazybones-templates',
    repository: 'https://github.com/ohtomi/lazybones-templates',
    language: '',
    category: 'tool',
    description: '[Lazybones](https://github.com/pledbrook/lazybones) templates',
    demo: '',
    pinned: true,
  },
  {
    name: 'aws-vapor',
    repository: 'https://github.com/ohtomi/aws-vapor',
    language: 'python',
    category: 'devops',
    description: 'This tool generates AWS Cloudformation template from python object.',
    demo: '',
    pinned: true,
  },
  {
    name: 'dotfiles',
    repository: 'https://github.com/ohtomi/dotfiles',
    language: '',
    category: 'misc',
    description: 'dot files',
    demo: '',
    pinned: false,
  },
  {
    name: 'mac-os-x-setup',
    repository: 'https://github.com/ohtomi/mac-os-x-setup',
    language: '',
    category: 'misc',
    description: 'Provisioning MacBook Pro using Ansible 2.x.',
    demo: '',
    pinned: false,
  },
  {
    name: 'homebrew-repos',
    repository: 'https://github.com/ohtomi/homebrew-repos',
    language: '',
    category: 'misc',
    description: 'Homebrew custom repository.',
    demo: '',
    pinned: false,
  },
  {
    name: 'ansible-role-jenkins2',
    repository: 'https://github.com/ohtomi/ansible-role-jenkins2',
    language: '',
    category: 'devops',
    description: 'This role can be used to install Jenkins 2.',
    demo: '',
    pinned: false,
  },
  {
    name: 'ansible-role-nexus3',
    repository: 'https://github.com/ohtomi/ansible-role-nexus3',
    language: '',
    category: 'devops',
    description: 'This role can be used to install Nexus Repository Manager 3.',
    demo: '',
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
  headerIcon: 'img/dummy.svg',
  footerIcon: 'img/dummy.svg',
  favicon: '',
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
