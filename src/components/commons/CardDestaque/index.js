import React from 'react';
import styled, { css } from 'styled-components';
import Proptypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardTitle from '../CardTitle';
import theme from '../../../theme';
import Link from '../Link';

const ContentCardDestaque = styled.div`
  background-color: ${() => theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1px;
  border-radius: 3px;
  cursor: pointer;

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

const CardText = styled.p`
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

const CardDestaque = ({ children }) => (
  <Link href={children.url}>
    <ContentCardDestaque>
      <CardImage alt="imagem" src={children.srcImage} />
      <CardBody>
        <CardTitle>{children.title}</CardTitle>
        <CardText>{children.text}</CardText>
      </CardBody>
    </ContentCardDestaque>
  </Link>
);

CardDestaque.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: Proptypes.object.isRequired,
};

export default CardDestaque;
