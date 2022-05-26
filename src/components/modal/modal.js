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
