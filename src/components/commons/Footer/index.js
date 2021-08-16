import React from 'react';
import styled, { css } from 'styled-components';
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
  width: 75px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

const Footer = () => {
  const icons = [
    {
      srcImage: '/images/gmail-round-logo.jpg',
      url: '/',
    },
    {
      srcImage: '/images/github-round-logo.png',
      url: '/',
    },
    {
      srcImage: '/images/linkedin-round-logo.png',
      url: '/',
    },
  ];

  return (
    <FooterContent>
      {icons.map((icon) => (
        <FooterIcon key={icon.srcImage}>
          <Icon src={icon.srcImage} alt="icone" />
        </FooterIcon>
      ))}
    </FooterContent>
  );
};

export default Footer;
