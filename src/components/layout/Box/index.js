import styled, { css } from 'styled-components';
import theme from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import convertPropsToStyle from '../../../theme/utils/convertPropsToStyle';

const Box = styled.div`
  ${convertPropsToStyle('flex')}
  ${convertPropsToStyle('display')}
  ${convertPropsToStyle('flexDirection')}
  ${convertPropsToStyle('justifyContent')}
  ${convertPropsToStyle('flexWrap')}
  ${convertPropsToStyle('backgroundImage')}
  ${convertPropsToStyle('backgroundRepeat')}
  ${convertPropsToStyle('backgroundPosition')}
  ${convertPropsToStyle('backgroundColor')}
  ${convertPropsToStyle('boxShadow')}
  ${convertPropsToStyle('padding')}
  ${convertPropsToStyle('height')}
  ${convertPropsToStyle('margin')}

  ${breakpointsMedia({
    xs: css`
      border: 2px solid ${() => theme.colors.primary};
    `,
    md: css`
      border: none;
    `,
  })}
`;

export default Box;
