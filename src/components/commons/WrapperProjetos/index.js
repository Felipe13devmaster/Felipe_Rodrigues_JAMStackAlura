import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card';
import CardDestaque from '../CardDestaque';

const BoxCards = styled.div`
  display: flex;
  justify-content: center;
`;

const BoxCardDestaque = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapperProjetos = () => (
  <>
    <BoxCards>
      <Card>Card</Card>
      <Card>Card</Card>
      <Card>Card</Card>
    </BoxCards>
    <BoxCardDestaque>
      <CardDestaque>CardDestaque</CardDestaque>
    </BoxCardDestaque>
  </>
);

// WrapperProjetos.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default WrapperProjetos;
