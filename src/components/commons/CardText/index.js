import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const Text = styled.p`


  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: block;
    `,
  })}
`;

const CardText = () => {
  return <Text>CardText lorem</Text>;
};

export default CardText;