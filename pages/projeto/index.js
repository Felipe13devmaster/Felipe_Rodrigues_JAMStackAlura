import React from 'react';

import RepositorioScreen from '../../src/components/screens/RepositorioScreen';
import websitePageHOC from '../../src/components/wrappers/WebSitePage/hoc';

// eslint-disable-next-line no-unused-vars
const projetos = [
  {
    image: '../img1.jpg',
    titulo: 'titulo 1',
    descricao: 'descrição 1',
    link: 'link1',
  },
  {
    image: '../img1.jpg',
    titulo: 'titulo 2',
    descricao: 'descrição 2',
    link: 'link2',
  },
  {
    image: '../img1.jpg',
    titulo: 'titulo 3',
    descricao: 'descrição 3',
    link: 'link3',
  },
  {
    image: '../img1.jpg',
    titulo: 'titulo 4',
    descricao: 'descrição 4',
    link: 'link4',
  },
];

const ProjetoPage = (projeto) => (
  <RepositorioScreen projeto={projeto} />
);

export default websitePageHOC(ProjetoPage, {
  pageWrapperProps: {
    capaProps: {
      display: false,
    },
  },
});
