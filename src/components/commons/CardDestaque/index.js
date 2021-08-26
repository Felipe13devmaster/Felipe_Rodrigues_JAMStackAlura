import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import theme from '../../../theme';

const ContentCardDestaque = styled.div`
  background-color: ${() => theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px;
  border-radius: 3px;

  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
      flex-direction: column;
      &:hover {
        background-color: ${() => theme.colors.tertiary};
        transition: 300ms;
      }
    `,
    md: css`
      width: 900px;
      height: 320px;
      flex-direction: row;
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
      width: 593px;
      height: 320px;
    `,
  })}
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 307px;
`;

const CardDestaque = ({ children }) => (
  <ContentCardDestaque>
    <CardImage alt="imagem" src={children.srcImage} />
    <CardBody>
      <CardTitle>{children.title}</CardTitle>
      <CardText>{children.text}</CardText>
    </CardBody>
  </ContentCardDestaque>
);

CardDestaque.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: Proptypes.object.isRequired,
};

export default CardDestaque;
