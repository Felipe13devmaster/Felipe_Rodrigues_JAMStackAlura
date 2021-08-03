import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Conteudo = styled.div`
  background-color: blue;
`;
const Titulo = styled.h1`
  color: white;
`;

const Capa = ({ children }) => (
  <Conteudo>
    <Titulo>
      {children}
    </Titulo>
  </Conteudo>
);

Capa.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Capa;
