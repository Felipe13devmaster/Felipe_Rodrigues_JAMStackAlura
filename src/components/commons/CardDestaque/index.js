import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardTitle from '../CardTitle';
import CardText from '../CardText';

const ContentCardDestaque = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
      flex-direction: column;
    `,
    md: css`
      width: 900px;
      height: 320px;
      flex-direction: row;
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

const CardDestaque = () => (
  <ContentCardDestaque>
    <CardImage alt="imagem" src="https://mariaeunicesousa.com/wp-content/uploads/2019/03/ecli-partial-solar-eclipse_20180810_600x320.jpg" />
    <CardBody>
      <CardTitle />
      <CardText />
    </CardBody>
  </ContentCardDestaque>
);

// CardDestaque.propTypes = {
//   children: PropTypes.string.isRequired,
// };

export default CardDestaque;
