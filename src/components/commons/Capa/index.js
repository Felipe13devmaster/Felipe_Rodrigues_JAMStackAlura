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
`;

const Capa = ({ children }) => (
  <Conteudo>
    <Titulo>
      {children}
    </Titulo>
    <h3>Portifólio</h3>
  </Conteudo>
);

Capa.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Capa;
