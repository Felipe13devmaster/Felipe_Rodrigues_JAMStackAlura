import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Button = styled.button`
  background-color: ${() => theme.colors.primary};
  cursor: pointer;
  
  ${breakpointsMedia({
    xs: css`
      padding: 12px 26px;
    `,
    md: css`
      padding: 15px 32px;
      &:hover {
        background-color: ${() => theme.colors.tertiary};
        transition: 300ms;
      }
    `,
  })}
`;

export default Button;
