import React from 'react';
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

const CardDestaque = () => (
  <ContentCardDestaque>
    <CardImage />
    <CardTitle />
    <CardText />
  </ContentCardDestaque>
);

// CardDestaque.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default CardDestaque;
