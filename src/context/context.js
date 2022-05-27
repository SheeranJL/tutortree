import React, {createContext, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  //Context application state//
  const [posts, setPost] = useState([]);
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  //Local to handle adding a new post//
  const handleAddPost = (post) => {
    posts.length ? setPost([...posts, post]) : setPost([post])
  }


  //Logic to handle appending a reply to an existing post//
  const handleAddReply = (reply, index) => {
    setPost(prevState => {
      const newState = [...prevState];
      newState[index].replies.push(reply)
      return newState;
    })
    setEditIndex(null);
  }


  return (
    <appContext.Provider
      value={{
        data: { posts, modal, editIndex },
        actions: { setModal, handleAddPost, handleAddReply, setEditIndex }
      }}
    >
      {props.children}
    </appContext.Provider>
  )
}
