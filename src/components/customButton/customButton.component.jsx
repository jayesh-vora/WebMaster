import React from 'react';

import './customButton.component.styles.scss';

const CustomButton = ({children, isGoogle, ...otherProps}) => (
  <button className={`${isGoogle ? 'google-signin' : '' } custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;