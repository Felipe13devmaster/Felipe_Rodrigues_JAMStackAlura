import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
text-decoration: none;
color: inherit;
`;

const Link = ({ href, children }) => (
  <NextLink href={href}>
    <StyledLink>
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
