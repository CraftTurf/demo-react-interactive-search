import  React from 'react';

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

export default InputField;
