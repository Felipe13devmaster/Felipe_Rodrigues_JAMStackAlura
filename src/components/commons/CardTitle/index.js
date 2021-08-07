import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Titulo = styled.h3`

`;

const CardTitle = ({ children }) => (
  <Titulo>{children}</Titulo>
);

CardTitle.propTypes = {
  children: Proptypes.node.isRequired,
};

export default CardTitle;
