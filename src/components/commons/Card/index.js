import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ContentCard = styled.div`
  background-color: pink;
  
  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
      margin: 16px;
    `,
    md: css`
      width: 288px;
      height: 510px;
      margin: 9px;
    `,
  })}
`;

const Card = ({ children }) => (
  <ContentCard>{children}</ContentCard>
);

Card.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Card;
