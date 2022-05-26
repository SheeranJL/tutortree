import React from 'react';
import './each-post.scss';

//import components//
import Upvote from '../upvote/upvote.js';
import CustomButton from '../../buttons/custom-button.js';
//*****************//



const EachPost = ({data, handleEdit, postId, messageType}) => {

  return (
    <div className={messageType === 'main' ? 'each-post' : 'each-reply'}>

      <div className='upvote-container'>
        <Upvote votes={data.votes} postId={postId} />
      </div>

      <div className='message-container'>
        <p className='message-username'>{data.username}</p>
        <p className='message-input'>{data.input}</p>

        <div className='message-button'>
          <CustomButton
            textColour={'purple'}
            clickEvent={handleEdit}>
            Reply
          </CustomButton>
        </div>

      </div>

    </div>
  )
}

export default EachPost;
