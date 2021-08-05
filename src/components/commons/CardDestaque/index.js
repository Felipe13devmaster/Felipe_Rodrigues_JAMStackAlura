import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ContentCardDestaque = styled.div`
  background-color: pink;
  
  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
    `,
    md: css`
      width: 900px;
      height: 320px;
    `,
  })}
`;

const CardDestaque = ({ children }) => (
  <ContentCardDestaque>{children}</ContentCardDestaque>
);

CardDestaque.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardDestaque;
