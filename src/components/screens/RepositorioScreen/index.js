/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import SectionTitle from '../../commons/SectionTitle';

const WrapperRepositorio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Imagem = styled.img`
  margin-bottom: 18px;
  border-radius: 5px;
`;

const Texto = styled.p`
  max-width: 700px;
  text-align: justify;
  text-indent: 2em;
`;

const TextoDestaque = styled.h3`
  margin-bottom: 0;
  font-size: 32px;
  font-weight: 300;
  line-height:  57.6px;
`;

const BoxProjeto = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 3px 10px 10px;
  background-color: ${theme.colors.primary};
`;

const LinkExterno = styled.a`
`;

const RepositorioScreen = () => (
  <WrapperRepositorio>
    <SectionTitle>Nome do projeto</SectionTitle>
    <BoxProjeto>
      <Imagem src="../../../images/img1.jpg" alt="Imagem" />
      <Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores voluptates accusamus eum odio earum eligendi. Tempore
        ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt
        nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam
        voluptatem odio earum eligendi ipsum dolor sit amet consectetur.
      </Texto>
      <Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores voluptates accusamus eum odio earum eligendi. Tempore
        ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt
        nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam
        voluptatem odio earum eligendi ipsum dolor sit amet consectetur.
      </Texto>
      <Texto>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores voluptates accusamus eum odio earum eligendi. Tempore
        ducimus quam voluptatem voluptates culpa impedit maiores? Incidunt
        nisi dicta quasi, quaerat temporibus facere!Tempore ducimus quam
        voluptatem odio earum eligendi ipsum dolor sit amet consectetur.
      </Texto>
      <TextoDestaque>Veja mais</TextoDestaque>
      <LinkExterno href="https://blabla.com">https://blabla.com</LinkExterno>
    </BoxProjeto>
  </WrapperRepositorio>
);

export default RepositorioScreen;
