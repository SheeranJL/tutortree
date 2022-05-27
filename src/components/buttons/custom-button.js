import React from 'react';
import './custom-button.scss';

const CustomButton = ({children, clickEvent, type, fill, handleSubmit, textColour}) => {
  return (
    <button
      className='button'
      onClick={clickEvent}
      style={{
        backgroundColor: fill ? '#7510F7': '',
        color: textColour,
        font: type === 'message' ? 'normal normal bold 19px/41px Open Sans' : null
        }}>
      {children}
    </button>
  )
}

export default CustomButton;
