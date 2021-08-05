import React from 'react';
import styled from 'styled-components';

const ContentFooter = styled.div`
  background-color: pink;
  margin-top: 52px;
`;

const Footer = ({ children }) => (
  <ContentFooter>{children}</ContentFooter>
);

export default Footer;
