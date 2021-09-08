/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
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
  background-color: ${theme.colors.primary};
  padding: 12px;
  

  ${breakpointsMedia({
    xs: css`
      
    `,
    md: css`
      border-radius: 30px;
    `,
  })}
`;

const Imagem = styled.img`
  margin-bottom: 18px;
  border-radius: 50%;
`;

const Texto = styled.p`
  max-width: 500px;
  text-align: justify;
  text-indent: 2em;
  
`;

const Subtitulo = styled.h3`
  margin-bottom: 0;
  color: white;
  font-size: 32px;
  font-weight: 300;
  line-height:  57.6px;
`;

const BoxMeusRepositorios = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  list-style-type: none;
  ${breakpointsMedia({
    xs: css`
      margin: 0 12px;
    `,
    md: css`
    `,
  })}
`;

const LinkExterno = styled.a`
`;

const SobreMimScreen = ({ repositorios }) => (
  <WrapperMeusRepositorios>
    <Box>
      <SectionTitle>SOBRE MIM</SectionTitle>
      <BoxSobreMim>
        <Imagem src="../../../images/foto.jpg" alt="imagem" />
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
            <Subtitulo>{repositorio.name}</Subtitulo>
            <LinkExterno href={repositorio.svn_url}>{repositorio.svn_url}</LinkExterno>
          </Item>
        ))}
      </BoxMeusRepositorios>
    </Box>
  </WrapperMeusRepositorios>
);

export default SobreMimScreen;
