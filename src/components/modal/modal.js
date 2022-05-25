import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './modal.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Modal = ({modalType}) => {

  const {actions: {handleAddPost, setModal}, data} = useContext(appContext);

  const [modalInput, setModalInput] = useState({
    input: '',
    username: '',
    replies: [],
    votes: 0,
  });
  const {input, username} = modalInput

  const handleChange = (e) => {
    const {name, value} = e.target
    setModalInput(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    if (!input || !username) return;
    handleAddPost(modalInput);
    setModal(false);
  }


  return (
    <div className='modal'>

      <input
        className='top-modal-input'
        name='input'
        type="text" placeholder={modalType === 'new' ? 'Write your post....' : 'Write your reply....'}
        value={input}
        onChange={handleChange}
      />

      <input
        className='bottom-modal-name'
        name='username'
        type="text" placeholder='Enter your pseudonym'
        value={username}
        onChange={handleChange}
      />

      <CustomButton
        fill={true}
        clickEvent={handleSubmit}>
          {modalType === 'new' ? 'Post' : 'Reply'}
      </CustomButton>


    </div>
  )
}

export default Modal;
