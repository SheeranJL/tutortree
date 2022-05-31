import React, {useState, useContext} from 'react';
import {appContext} from './context/context.js';
import './app.scss';

//import components//
import Header from './components/header/header.js';
import Modal from './components/modal/modal.js';
import Posts from './components/posts/posts.js';
//*****************//


const App = () => {

  //Import context app state//
  const {data: {modal, posts}, actions} = useContext(appContext)

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>

      { /*If modal state boolean (from context) is true, display the modal, otherwise, don't.*/
        modal ? ( <div className='modal-container'> <Modal modalType={modal}/> </div> ) : null
      }

      <div className='post-container'>
        { /*If posts exist, display the posts, otherwise, don't and a blank screen will appear with only the header above*/
          !posts.length ? null : posts.map((item, index) => <Posts key={index} index={index} data={item}/>)
        }
      </div>
    </div>
  );
}

export default App;
