import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './header.scss';

//import components//
import CustomButton from '../buttons/custom-button.js';
//*****************//


const Header = () => {

  //import context state//
  const {actions: {setModal}} = useContext(appContext);

  return (
    <div className='header-component'>

      <h1>Maths For 'em</h1>

      <div className='header-button'>
        <CustomButton
          clickEvent={() => setModal('new')}
          type={'newPost'}>
          New Post
        </CustomButton>
      </div>

    </div>
  )
}

export default Header;
