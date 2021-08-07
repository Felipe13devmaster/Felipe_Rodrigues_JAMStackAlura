import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Text = styled.p`


  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: block;
    `,
  })}
`;

const CardText = ({ children }) => (
  <Text>{children}</Text>
);

CardText.propTypes = {
  children: Proptypes.node.isRequired,
};

export default CardText;
