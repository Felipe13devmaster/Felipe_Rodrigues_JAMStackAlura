import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentCardDestaque = styled.div`
  background-color: pink;
  width: 900px;
  height: 320px;
  margin-top: 21px;
`;

const CardDestaque = ({ children }) => (
  <ContentCardDestaque>{children}</ContentCardDestaque>
);

CardDestaque.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardDestaque;
