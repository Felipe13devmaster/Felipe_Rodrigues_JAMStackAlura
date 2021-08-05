import React from 'react';
import Cabecalho from '../src/components/commons/Cabecalho';
import Capa from '../src/components/commons/Capa';
import Card from '../src/components/commons/Card';
import CardDestaque from '../src/components/commons/CardDestaque';
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
      <WrapperProjetos>
        <SectionTitle>Meus Projetos</SectionTitle>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <CardDestaque>CardDestaque</CardDestaque>
      </WrapperProjetos>
      <Footer>Footer</Footer>
    </div>
  );
}
