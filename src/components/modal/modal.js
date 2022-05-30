import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './modal.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Modal = ({modalType}) => {

  //import context state//
  const {actions: {handleAddPost, handleAddReply, setModal, setEditIndex}, data: {modal, editIndex} } = useContext(appContext);


  //local component state - holding input valuees//
  const [modalInput, setModalInput] = useState({ input: '', username: '', replies: []});
  const {input, username} = modalInput;


  //Logic to handle element value changes and store these values in local app state (modalInput)//
  const handleChange = (e) => {
    const {name, value} = e.target
    setModalInput(prevState => ({...prevState, [name]: value }))
  }


  //Logic to handle submission//
  const handleSubmit = (e) => {
    //if modal is for a new post, triage a request to create a new post, otherwise append a reply to parent post.
    modal === 'new' ? handleAddPost(modalInput) : handleAddReply(modalInput, editIndex)
    setModalInput({input: '', username: '', replies: []});
    setModal(false);
  }


  return (
    <div className='modal'>

      <textarea
        name='input'
        type="textarea"
        placeholder={modalType === 'new' ? 'Write your post....' : 'Write your reply....'}
        onChange={handleChange}
        value={input}
        className={modalType === 'new' ? 'top-modal-input box-shadow-modal-top' : 'top-modal-input'}
      />


      <div className={modalType === 'new' ? 'bottom-modal-name' : 'bottom-modal-name box-shadow-name'} >
        <input
          className='input-name'
          name='username'
          type="text"
          placeholder='Enter your pseudonym'
          value={username}
          onChange={handleChange}
        />
      </div>

      <div className={modalType === 'reply' ? 'modal-button-reply' : 'modal-button-post'}>
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
