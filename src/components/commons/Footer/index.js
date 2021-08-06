import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const FooterContent = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  height: 68px;
  
  ${breakpointsMedia({
    xs: css`
      margin-top: 32px;
    `,
    md: css`
      margin-top: 52px;
    `,
  })}
`;

const FooterIcon = styled.div`
  background-color: red;
  display: flex;
  align-Items: center;
  justify-content: center;
  width: 224px;
`;

const Footer = ({ children }) => (
  <FooterContent>
    <FooterIcon>
      {children}
    </FooterIcon>
  </FooterContent>
);

export default Footer;
