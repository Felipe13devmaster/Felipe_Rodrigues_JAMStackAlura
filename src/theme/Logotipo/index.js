import React from 'react';
import styled from 'styled-components';
import Link from '../../components/commons/Link';

const LogotipoContent = styled.div`

`;

const Logotipo = () => (
  <Link href="/">
    <LogotipoContent>
      Home
    </LogotipoContent>
  </Link>
);

export default Logotipo;
