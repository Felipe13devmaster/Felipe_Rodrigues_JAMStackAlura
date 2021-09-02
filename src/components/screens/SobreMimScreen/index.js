/* eslint-disable react/prop-types */
import React from 'react';
import Box from '../../layout/Box';

const SobreMimScreen = ({ repositorios }) => (
  <Box>
    {repositorios.map((repositorio) => (
      <li key={repositorio.id}>{repositorio.name}</li>
    ))}
  </Box>
);

export default SobreMimScreen;
