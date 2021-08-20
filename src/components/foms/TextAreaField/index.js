import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const TextArea = styled.textarea`
  border: 1px solid black;
  padding: 12px 16px;
  outline: 0;
  max-width: 100%;
  max-height: 520px;
  ${breakpointsMedia({
    xs: css`
      width: 90%
    `,
    md: css`
      width: 100%
    `,
  })}
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
