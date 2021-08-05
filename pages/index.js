import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Footer from '../src/components/commons/Footer';
import SectionTitle from '../src/components/commons/SectionTitle';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';

export default function Home() {
  return (
    <div>
      <Capa>
        MARY ELIZABETH
      </Capa>
      <Cabecalho />
      <SectionTitle>Meus Projetos</SectionTitle>
      <WrapperProjetos />
      <Footer>Footer</Footer>
    </div>
  );
}
