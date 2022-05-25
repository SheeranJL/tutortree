import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, clickEvent, type, fill, handleSubmit, textColour}) => {
  return (
    <button
      onClick={clickEvent}
      style={{backgroundColor: fill ? '#7510F7': '', color: textColour}}>
      {children}
    </button>
  )
}

export default CustomButton;
