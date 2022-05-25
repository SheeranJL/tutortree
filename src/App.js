import React, {useState, useContext} from 'react';
import {appContext} from './context/context.js';
import logo from './logo.svg';
import './app.scss';

//import components//
import Header from './components/header/header.js';
import Modal from './components/modal/modal.js';
import Post from './components/posts/posts.js';
//*****************//


const App = () => {

  const {data: {modal, posts}, actions} = useContext(appContext)

  return (
    <div className='app-container'>

      <div className='header-container'>
        <Header />
      </div>

      {
        modal
        ? (
          <div className='modal-container'>
            <Modal modalType={modal}/>
          </div>
        )
        : null
      }

      <div className='post-container'>
        {
          !posts.length
          ? null
          : posts.map((item, index) => <Post key={index} index={index} data={item}/>)
        }
      </div>


    </div>
  );
}

export default App;
