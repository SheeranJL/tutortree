import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './posts.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
import Upvote from './upvote/upvote.js';
//*****************//


const Post = ({data, index}) => {

  const {actions: {setModal, setEditIndex}} = useContext(appContext);

  const handleEdit = () => {
    setModal('reply');
    setEditIndex(index);
  }

  console.log(data);

  return (
    <div className='post'>

      <div className='upvote-container'>
        <Upvote votes={data.votes} postId={index} />
      </div>

      <div className='message-container'>
        <p>{data.username}</p>
        <p>{data.input}</p>
        <CustomButton
          textColour={'purple'}
          clickEvent={handleEdit}>
          Reply
        </CustomButton>
      </div>



    </div>

  )
}

export default Post;
