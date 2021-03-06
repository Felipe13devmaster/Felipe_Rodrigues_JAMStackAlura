import styled from 'styled-components';
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
`;

export default Box;
