import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './header.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Header = () => {

  const {actions: {setModal}} = useContext(appContext);

  return (
    <div className='header-component'>
      <p>Maths For 'em</p>
      <CustomButton
        clickEvent={() => setModal('new')}
        type={'newPost'}>
        New Post
      </CustomButton>
    </div>
  )
}

export default Header;
