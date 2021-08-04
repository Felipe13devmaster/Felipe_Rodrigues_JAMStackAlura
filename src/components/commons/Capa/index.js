import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Conteudo = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Titulo = styled.h1`
  color: white;
  margin-bottom: 0;
  font-size: 90px;
  font-weight: 400;
  line-height: 108px;
`;
const Subtitulo = styled.h3`
  color: white;
  margin-top: 0;
  font-size: 48px;
  font-weight: 300;
  line-height:  57.6px;
`;

const Capa = ({ children }) => (
  <Conteudo>
    <Titulo>
      {children}
    </Titulo>
    <Subtitulo>Portifólio</Subtitulo>
  </Conteudo>
);

Capa.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Capa;
