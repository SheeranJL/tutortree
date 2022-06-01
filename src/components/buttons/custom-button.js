import React from 'react';
import './custom-button.scss';


//Reusable button component//
const CustomButton = ({children, clickEvent, type, fill, handleSubmit, textColour}) => {
  return (
    <button
      className={type === 'message' ? 'button button-message' : 'button'}
      onClick={clickEvent}
      style={{
        backgroundColor: fill ? '#7510F7': '',
        color: textColour,
        }}>
      {children}
    </button>
  )
}

export default CustomButton;
