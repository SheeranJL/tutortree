import React, {createContext, useState} from 'react';
export const appContext = createContext();


//Main application state - **this could have just been located in app.js but I like to keep state logic isolated from layout components**//
export const Provider = (props) => {

  //Context application state//
  const [posts, setPost] = useState([]); //<-- holds all our posts, and respective replies.
  const [modal, setModal] = useState(false); //<--
  const [editIndex, setEditIndex] = useState(null); //<-- this is a marker for the index of the parent post whom we wish to append a reply to.


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
    setEditIndex(null); //<-- set editIndex back to null.
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
