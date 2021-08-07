import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import theme from '../../../theme';

const Conteudo = styled.div`
  background-color: ${() => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Titulo = styled.h1`
  color: white;
  margin-bottom: 0;
  font-weight: 400;

  ${breakpointsMedia({
    xs: css`
      font-size: 64px;
      line-height: 76.8px;
      text-align: center;
    `,
    md: css`
      font-size: 90px;
      line-height: 108px;
    `,
  })}
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
    <Subtitulo>Portfolio</Subtitulo>
  </Conteudo>
);

Capa.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Capa;
