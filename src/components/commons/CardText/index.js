import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import theme from '../../../theme';

const Text = styled.p`
  background-color: ${() => theme.colors.white};
  height: fit-content;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 0px;
  text-align: justify;
  word-break: break-word;
  text-indent: 2em;
  border-radius: 3px;
  padding: 5px;

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
