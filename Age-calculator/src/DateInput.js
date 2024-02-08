// DateInput.js
import React from 'react';

const DateInput = ({ label, name, onChange, max, min, error, errorMessage }) => {
  return (
    <div className={`js-${name}`}>
      <label className={`fieldlabel ${error ? 'errorstate' : ''}`}>{label}</label>
      <input
        type="number"
        className={`input-field ${error ? 'input-errstate' : ''}`}
        placeholder={label.toUpperCase()}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
      />
      <p className={`error-text`}>{error ? errorMessage : ''}</p>
    </div>
  );
};

export default DateInput;
