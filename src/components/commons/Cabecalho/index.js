import React from 'react';
import styled, { css } from 'styled-components';
import Logotipo from '../../../theme/Logotipo';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Nav from '../Nav';

const WrapperCabecalho = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-around;
  ${breakpointsMedia({
    xs: css`
      justify-content: space-between;
    `,
    md: css`
      justify-content: space-around;
    `,
  })}
`;

WrapperCabecalho.LeftSide = styled.div`
  background-color: yellowgreen;
`;

WrapperCabecalho.RightSide = styled.div`
  background-color: red;
`;

const Cabecalho = () => (
  <WrapperCabecalho>
    <WrapperCabecalho.LeftSide>
      <Logotipo />
    </WrapperCabecalho.LeftSide>
    <WrapperCabecalho.RightSide>
      <Nav />
    </WrapperCabecalho.RightSide>
  </WrapperCabecalho>
);

export default Cabecalho;
