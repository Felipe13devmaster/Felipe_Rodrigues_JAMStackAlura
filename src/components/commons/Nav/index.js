import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Link from '../Link';

const Menu = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
      line-height: 22px;
    `,
    md: css`
      font-size: 28px;
      line-height: 34px;
      li:hover {
        background-color: ${() => theme.colors.tertiary};
        transition: 300ms;
        transform: scale(1.05);
      }
    `,
  })}
`;

const Nav = () => {
  const links = [
    {
      texto: 'Sobre Mim',
      url: '/sobreMim',
    },
    {
      texto: 'Contato',
      url: '/contato',
    },
  ];

  return (
    <Menu>
      {
        links.map((link) => (
          <li key={link.url}>
            <Link href={link.url}>{link.texto}</Link>
          </li>
        ))
      }
    </Menu>
  );
};

export default Nav;
