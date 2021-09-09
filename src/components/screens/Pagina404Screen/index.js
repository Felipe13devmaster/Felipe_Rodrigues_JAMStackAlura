import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const WrapperPagina = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxPagina404 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  padding: 0 20px 0 20px;

  ${breakpointsMedia({
    xs: css`
      margin: 0 20px 0 20px;
    `,
    md: css`
      margin: 0;
    `,
  })}
`;

const Titulo = styled.h1`
  color: white;
  margin-top: 20px;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;

  ${breakpointsMedia({
    xs: css`
      font-size: 64px;
      line-height: 76.8px;
    `,
    md: css`
      font-size: 144px;
      line-height: 172.8px;
    `,
  })}
`;
const Subtitulo = styled.h3`
  color: white;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height:  43.2px;
`;

const Pagina404Screen = () => (
  <WrapperPagina>
    <BoxPagina404>
      <Titulo>404</Titulo>
      <Subtitulo>Página não encontrada</Subtitulo>
    </BoxPagina404>
  </WrapperPagina>
);

export default Pagina404Screen;
