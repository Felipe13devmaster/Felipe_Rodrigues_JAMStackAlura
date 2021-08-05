import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const ContentFooter = styled.div`
  background-color: pink;
  
  ${breakpointsMedia({
    xs: css`
      margin-top: 32px;
    `,
    md: css`
      margin-top: 52px;
    `,
  })}
`;

const Footer = ({ children }) => (
  <ContentFooter>{children}</ContentFooter>
);

export default Footer;
