// DateInput.js
import React from 'react';

const DateInput = ({ name, placeholder, onChange, max, min, error, errorMessage }) => {
  return (
    <section className={`js-${name}`}>
      <label className={`fieldlabel ${error ? 'errorstate' : ''}`}>{name.toUpperCase()}</label>
      <input
        type="number"
        className={`input-field ${error ? 'input-errstate' : ''}`}
        placeholder={placeholder}
        max={max}
        min={min}
        name={name}
        onChange={onChange}
      />
      <p className={`error-text`}>{error ? errorMessage : ''}</p>
    </section>
  );
};

export default DateInput;
