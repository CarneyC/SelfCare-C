import React from 'react';
import { ControlLabel, FormControl,  } from 'react-bootstrap';

const TextFieldGroup = ({ label, id, type, name, placeholder, value, onChange, error }) => {
  return (
    <div className="formFields">
      <ControlLabel>{label}</ControlLabel>
      <FormControl
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      { error !== undefined && <div style={errorStyle}>{ error }</div> }
    </div>
  )
};

const errorStyle = {
  color: '#cc0000',
  paddingTop: '0.5em',
};

export default TextFieldGroup;
