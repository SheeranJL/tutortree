import React, {createContext, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  //Context application state//
  const [posts, setPost] = useState([]);
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  //Local to handle adding a new post//
  const handleAddPost = (post) => {
    console.log(post)
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


  //Logic to handle upvoting a post//
  const handleVotes = (vote, index) => {
    setPost(prevState => {
      const newState = [...prevState];
      vote === 'up' ? newState[index].votes += 1 : newState[index].votes -= 1
      return newState;
    })
  }



  return (
    <appContext.Provider
      value={{
        data: { posts, modal, editIndex },
        actions: { setModal, handleAddPost, handleAddReply, setEditIndex, handleVotes }
      }}
    >
      {props.children}
    </appContext.Provider>
  )
}
