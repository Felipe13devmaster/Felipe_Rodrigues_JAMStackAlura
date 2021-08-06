import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';

const ContentCardDestaque = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  <ContentCardDestaque>
    <CardImage></CardImage>
    <CardTitle></CardTitle>
    <CardText></CardText>
  </ContentCardDestaque>
);

CardDestaque.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardDestaque;
