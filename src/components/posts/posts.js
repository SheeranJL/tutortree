import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './posts.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
import Upvote from './upvote/upvote.js';
import EachPost from './each-post/each-post.js';
//*****************//


const Posts = ({data, index}) => {

  //Import context state//
  const {actions: {setModal, setEditIndex}} = useContext(appContext);

  //This logic is for tethering a reply to a specific post ID using the posts' index as a reference point//
  const handleEdit = () => {
    setModal('reply');
    setEditIndex(index);
  }

  return (
    <div className='post'>
      <EachPost messageType={'main'} data={data} handleEdit={handleEdit} postId={index}/>
      {
        data.replies.length
        ? data.replies.map((item, i) => <EachPost key={i} messageType={'reply'} parentPost={index} index={i} data={item} handleEdit={handleEdit} postId={i} />)
        : null
      }
    </div>
  )
}

export default Posts;
