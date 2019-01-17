import * as React from 'react';
import Props from 'prop-types';

const Input = (props) => {
  const {
    name,
    value,
    label,
    onChange,
    disabled,
    type,
  } = props;

  return (
    <label className="label" htmlFor={name}>{label}
      <input
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        id={name}
      />
    </label>
  );
}

Input.propTypes = {
  name: Props.string.isRequired,
  label: Props.string.isRequired,
  onChange: Props.func.isRequired,
  disabled: Props.bool,
  type: Props.string,
  value: Props.oneOfType([Props.string, Props.number]).isRequired,
};

Input.defaultProps = {
  disabled: false,
  type: 'text',
};

export default Input;
