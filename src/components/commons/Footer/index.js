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

const StyledLink = styled.a`
text-decoration: none;
color: inherit;
`;

const Footer = () => {
  const icons = [
    {
      srcImage: '/images/gmail-round-logo.jpg',
      url: '/',
    },
    {
      srcImage: '/images/github-round-logo.png',
      url: 'https://github.com/Felipe13devmaster',
    },
    {
      srcImage: '/images/linkedin-round-logo.png',
      url: 'https://www.linkedin.com/in/felipe-r-4a80868b/',
    },
  ];

  return (
    <FooterContent>
      {icons.map((icon) => (
        <FooterIcon key={icon.srcImage}>
          <StyledLink href={icon.url}>
            <Icon src={icon.srcImage} alt="icone" />
          </StyledLink>
        </FooterIcon>
      ))}
    </FooterContent>
  );
};

export default Footer;
