import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Menu = styled.nav`
  display: flex;
  list-style: none;
  justify-content: space-between;
  width: 100%;
  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
      line-height: 22px;
    `,
    md: css`
      font-size: 28px;
      line-height: 34px;
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
            {link.texto}
          </li>
        ))
      }
    </Menu>
  );
};

export default Nav;
