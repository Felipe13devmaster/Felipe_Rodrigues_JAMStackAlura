import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardTitle from '../CardTitle';
import theme from '../../../theme';

const ContentCard = styled.div`
  background-color: ${() => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

const CardImage = styled.img`
 
  ${breakpointsMedia({
    xs: css`
      width: 288px;
      height: 177px;
    `,
    md: css`
      width: 287px;
      height: 390px;
    `,
  })}
`;

const Card = ({ children }) => (
  <ContentCard>
    <CardImage src={children.srcImage} />
    <CardTitle>{children.title}</CardTitle>
  </ContentCard>
);

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: Proptypes.object.isRequired,
};

export default Card;
