import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 12px 16px;
  outline: 0;
  ${breakpointsMedia({
    xs: css`
      width: 90%
    `,
    md: css`
      width: 100%
    `,
  })}
`;

const TextField = ({
  placeholder,
  name,
  onChange,
  value,
}) => (

  <InputWrapper>
    <Input
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  </InputWrapper>
);

// Input.defaultProps = {
//   tag: 'input',
//   variant: 'paragraph1',
// };

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextField;
