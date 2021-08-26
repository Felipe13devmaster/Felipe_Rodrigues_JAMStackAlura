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
  padding: 1px;
  border-radius: 3px;

  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
      margin: 16px;
      &:hover {
        background-color: ${() => theme.colors.tertiary};
        transition: 300ms;
      }
    `,
    md: css`
      width: 288px;
      height: 510px;
      margin: 9px;
      &:hover {
        background-color: ${() => theme.colors.tertiary};
        transition: 300ms;
        transform: scale(1.05);
      }
    `,
  })}
`;

const CardImage = styled.img`
  border: 1px solid ${() => theme.colors.tertiary};
 
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

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Card = ({ children }) => (
  <Link href={children.link}>
    <ContentCard>
      <CardImage src={children.srcImage} />
      <CardTitle>{children.title}</CardTitle>
    </ContentCard>
  </Link>
);

Card.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Card;
