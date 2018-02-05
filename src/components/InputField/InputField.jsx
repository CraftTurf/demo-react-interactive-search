import  React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type,
  onChange,
  value,
  placeholder,
  onBlur,
  onFocus,
  styles
}) => (
  <div className="input-field">
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      className={styles}
    />
  </div>
);

InputField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus:PropTypes.func,
  className: PropTypes.string
}

InputField.default = {
  type:'text',
  onChange:() => {},
  placeholder: 'Enter your text',
  className: 'input',
  onFocus:() => {},
  onBlur:() => {},
}


export default InputField;
