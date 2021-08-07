import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import SectionTitle from '../src/components/commons/SectionTitle';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';
import Box from '../src/components/layout/Box';

export default function Home() {
  return (
    <Box>
      <Capa>
        FELIPE RODRIGUES
      </Capa>
      <Cabecalho />
      <SectionTitle>Meus Projetos</SectionTitle>
      <WrapperProjetos />
      <Footer />
    </Box>
  );
}
