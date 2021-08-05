import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h2`
  
`;

const SectionTitle = ({ children }) => (
  <Titulo>{children}</Titulo>
);

export default SectionTitle;
