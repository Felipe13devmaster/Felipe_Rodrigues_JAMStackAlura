import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import theme from '../../../theme';

const Content = styled.div`
  background-color: ${() => theme.colors.quaternary};
`;

const Box = ({ children }) => (
  <Content>{children}</Content>
);

Box.propTypes = {
  children: PropType.node.isRequired,
};

export default Box;
