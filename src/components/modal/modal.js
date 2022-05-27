import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './modal.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Modal = ({modalType}) => {

  //import context state//
  const {actions: {handleAddPost, handleAddReply, setModal, setEditIndex}, data: {modal, editIndex} } = useContext(appContext);


  //local component state//
  const [modalInput, setModalInput] = useState({ input: '', username: '', replies: [], votes: 0 });
  const {input, username} = modalInput;


  //Logic to handle element value changes and store these values in local app state (modalInput)//
  const handleChange = (e) => {
    const {name, value} = e.target
    setModalInput(prevState => ({...prevState, [name]: value }))
  }


  //Logic to handle submission//
  const handleSubmit = (e) => {
    if (!input || !username) return;
    modal === 'new' ? handleAddPost(modalInput) : handleAddReply(modalInput, editIndex)
    setModal(false);
  }

  console.log(modalType);

  return (
    <div className='modal'>

      <div className={modalType === 'new' ? 'top-modal-input box-shadow-modal-top' : 'top-modal-input'}>
        <input
          className='input-text'
          name='input'
          type="text" placeholder={modalType === 'new' ? 'Write your post....' : 'Write your reply....'}
          value={input}
          onChange={handleChange}
        />
      </div>

      <div className={modalType === 'new' ? 'bottom-modal-name' : 'bottom-modal-name box-shadow-name'} >
      <input
        className='input-name'
        name='username'
        type="text" placeholder='Enter your pseudonym'
        value={username}
        onChange={handleChange}
      />
      </div>

      <div className='modal-button'>
        <CustomButton
          fill={true}
          clickEvent={handleSubmit}>
          {modalType === 'new' ? 'Post' : 'Reply'}
        </CustomButton>
      </div>

    </div>
  )
}

export default Modal;
