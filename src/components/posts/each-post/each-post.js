import React, {useState} from 'react';
import './each-post.scss';

//import components//
import Upvote from '../upvote/upvote.js';
import CustomButton from '../../buttons/custom-button.js';
//*****************//



const EachPost = ({data, handleEdit, postId, messageType, index, parentPost}) => {

  //local state for votes//
  const [votes, setVotes] = useState(0)

  return (
    <div className={messageType === 'main' ? 'each-post' : 'each-reply'}>

      <div className='upvote-container'>
        <Upvote votes={votes} setVotes={setVotes} />
      </div>

      <div className='message-container'>
        <p className='message-username'>{data.username}</p>
        <p className='message-input'>{data.input}</p>

        <div className='message-button'>
          <CustomButton type='message' textColour={'#7510F7'} clickEvent={handleEdit}>
            Reply
          </CustomButton>
        </div>

      </div>

    </div>
  )
}

export default EachPost;
