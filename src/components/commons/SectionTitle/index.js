import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Titulo = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;

  ${breakpointsMedia({
    xs: css`
      font-size: 36px;
      line-height: 43px;
      margin: 32px 0;
    `,
    md: css`
      font-size: 60px;
      line-height: 72px;
      margin: 64px 0 85px;
    `,
  })}
`;

const SectionTitle = ({ children }) => (
  <Titulo>{children}</Titulo>
);

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
