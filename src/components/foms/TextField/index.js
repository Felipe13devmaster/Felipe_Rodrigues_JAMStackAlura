import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  padding: 12px 16px;
  outline: 0;
  
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
