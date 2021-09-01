import React from 'react';
import Button from '../src/components/commons/Button';
import ButtonGroup from '../src/components/commons/ButtonGroup';
import SectionTitle from '../src/components/commons/SectionTitle';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Box from '../src/components/layout/Box';
import { WebsitePageContext } from '../src/components/wrappers';
import webSitePageHOC from '../src/components/wrappers/WebSitePage/hoc';

const HomeScreen = () => {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Box>
      <SectionTitle>Meus Projetos</SectionTitle>
      <WrapperProjetos />
      <ButtonGroup>
        <Button
          onClick={() => {
            websitePageContext.toggleModalCadastro();
          }}
        >
          Entre em contato
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default webSitePageHOC(HomeScreen);
