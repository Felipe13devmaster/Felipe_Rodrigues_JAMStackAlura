import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Card from '../Card';
import CardDestaque from '../CardDestaque';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxCards = styled.div`
  display: flex;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
      order: 1;
    `,
    md: css`
      flex-direction: row;
      justify-content: center;
      order: 0;
    `,
  })}
`;

const BoxCardDestaque = styled.div`
  display: flex;
  justify-content: center;

  ${breakpointsMedia({
    xs: css`
      order: 0;
      margin-bottom: 16px;
    `,
    md: css`
      margin-top: 21px;
      order: 1;
    `,
  })}
`;

const WrapperProjetos = () => (
  <BoxWrapper>
    <BoxCards>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
    </BoxCards>
    <BoxCardDestaque>
      <CardDestaque>CardDestaque</CardDestaque>
    </BoxCardDestaque>
  </BoxWrapper>
);

// WrapperProjetos.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default WrapperProjetos;
