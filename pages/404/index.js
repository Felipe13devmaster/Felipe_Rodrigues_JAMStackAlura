import React from 'react';
import Pagina404Screen from '../../src/components/screens/Pagina404Screen';
import webSitePageHOC from '../../src/components/wrappers/WebSitePage/hoc';

function Page404() {
  return (
    <Pagina404Screen />
  );
}

export default webSitePageHOC(Page404, {
  pageWrapperProps: {
    capaProps: {
      display: false,
    },
  },
});
