import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './posts.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Post = ({data}) => {

  const {actions: {setModal}} = useContext(appContext);

  return (
    <div className='post'>
      <p>{data.username}</p>
      <p>{data.input}</p>
      <CustomButton
        textColour={'purple'}
        clickEvent={() => setModal('reply')}>
        Reply
      </CustomButton>
    </div>
  )
}

export default Post;
