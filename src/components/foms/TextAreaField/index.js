import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid black;
  padding: 12px 16px;
  outline: 0;
  max-width: 330px;
  max-height: 520px;
`;

const TextAreaField = ({
  placeholder,
  name,
  onChange,
  value,
  rows,
}) => (

  <InputWrapper>
    <TextArea
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      rows={rows}
    />
  </InputWrapper>
);

TextAreaField.defaultProps = {
  rows: 1,
};

TextAreaField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string,
};

export default TextAreaField;
