import React from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Content = styled.div`
  background-color: ${() => theme.colors.dark};

  ${breakpointsMedia({
    xs: css`
      border: 2px solid ${() => theme.colors.primary};
    `,
    md: css`
      border: none;
    `,
  })}
`;

const Box = ({ children }) => (
  <Content>{children}</Content>
);

Box.propTypes = {
  children: PropType.node.isRequired,
};

export default Box;
