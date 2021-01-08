import React from 'react';

import './form-input.component.styles.scss';

const FormInput = ({handleChange, label, ...otherInputProps}) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...otherInputProps} />
    {
      label ? (
        <label className={`${otherInputProps.value.length ? 'shrink' : null} form-label`}>
          {label}
        </label>
      ) : null
    }
  </div>
)

export default FormInput;