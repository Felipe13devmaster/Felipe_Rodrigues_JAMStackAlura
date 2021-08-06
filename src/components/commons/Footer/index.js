import React from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';
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

Footer.propTypes = {
  children: PropType.string.isRequired,
};

export default Footer;
