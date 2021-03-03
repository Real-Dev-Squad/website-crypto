import React from 'react';

import { CustomButtonContainer } from './custom-button.style';
const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>
);

export default CustomButton;
