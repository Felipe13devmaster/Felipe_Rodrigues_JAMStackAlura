import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentCard = styled.div`
  background-color: pink;
  width: 288px;
  height: 510px;
  margin: 9px;
`;

const Card = ({ children }) => (
  <ContentCard>{children}</ContentCard>
);

Card.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Card;
