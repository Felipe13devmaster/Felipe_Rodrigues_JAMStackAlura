import React from 'react';
import styled, { css } from 'styled-components';
import PropType from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import theme from '../../../theme';

const FooterContent = styled.div`
  background-color: ${() => theme.colors.primary};
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
  background-color: ${() => theme.colors.secondary};
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
