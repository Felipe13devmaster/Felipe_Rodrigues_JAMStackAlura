/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../commons/SectionTitle';
import Box from '../../layout/Box';

const WrapperMeusRepositorios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxSobreMim = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Imagem = styled.img``;

const Texto = styled.p`
  max-width: 500px;
  text-align: justify;
  text-indent: 2em;
`;

const BoxMeusRepositorios = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style-type: none;
`;

const LinkExterno = styled.a`
`;

const SobreMimScreen = ({ repositorios }) => (
  <WrapperMeusRepositorios>
    <Box>
      <SectionTitle>SOBRE MIM</SectionTitle>
      <BoxSobreMim>
        <Imagem alt="imagem" />
        <Texto>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores voluptates accusamus eum odio earum eligendi. Tempore
          ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt
          nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam
          voluptatem odio earum eligendi ipsum dolor sit amet consectetur.
        </Texto>
      </BoxSobreMim>
      <SectionTitle>MEUS REPOSITÓRIOS</SectionTitle>
      <BoxMeusRepositorios>
        {repositorios.map((repositorio) => (
          <Item key={repositorio.id}>
            <Texto>{repositorio.name}</Texto>
            <LinkExterno href={repositorio.svn_url}>{repositorio.url}</LinkExterno>
          </Item>
        ))}
      </BoxMeusRepositorios>
    </Box>
  </WrapperMeusRepositorios>
);

export default SobreMimScreen;
