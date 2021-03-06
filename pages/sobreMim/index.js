/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

import SobreMimScreen from '../../src/components/screens/SobreMimScreen';
import websitePageHOC from '../../src/components/wrappers/WebSitePage/hoc';

const SobreMimPage = ({ repositorios }) => (
  <SobreMimScreen repositorios={repositorios} />
);

export async function getStaticProps() { // renderizando o conteudo estatico no servidor
  const repositorios = await fetch('https://api.github.com/users/Felipe13devmaster/repos')
    .then((res) => res.json());
  return {
    props: { repositorios },
  };
}

export default websitePageHOC(SobreMimPage, {
  pageWrapperProps: {
    capaProps: {
      display: false,
    },
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
});
