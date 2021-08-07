import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import Logotipo from '../../../theme/Logotipo';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Nav from '../Nav';

const WrapperCabecalho = styled.div`
  background-color:  ${() => theme.colors.primary};
  display: flex;
  justify-content: space-around;

  ${breakpointsMedia({
    xs: css`
      height: 40px;
    `,
    md: css`
      height: 67px;
    `,
  })}
`;

WrapperCabecalho.LeftSide = styled.div`
  background-color: ${() => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-Items: center;

  ${breakpointsMedia({
    xs: css`
      width: 83px;
    `,
    md: css`
      width: 136px;
    `,
  })}
`;

WrapperCabecalho.RightSide = styled.div`
  background-color:  ${() => theme.colors.tertiary};
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${breakpointsMedia({
    xs: css`
      width: 169px;
    `,
    md: css`
      width: 250px;
    `,
  })}
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
