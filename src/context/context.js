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


  //Logic to handle upvoting a post//
  const handleVotes = (vote, index, parent) => {

    //If upvote trigger is associated with a reply of a parent - update vote for the reply//
    if (parent != undefined) {
      setPost(prevState => {
        const newState = [...prevState];
        vote === 'up' ? newState[parent].replies[index].votes += 1 : newState[parent].replies[index].votes -= 1
        return newState;
      })
    //Else find and update the parent's vote//
    } else {
      setPost(prevState => {
        const newState = [...prevState];
        vote === 'up' ? newState[index].votes += 1 : newState[index].votes -= 1
        return newState;
      })
    }
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
