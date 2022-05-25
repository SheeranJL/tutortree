import React, {createContext, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [posts, setPost] = useState([]);
  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddPost = (post) => {
    posts.length ? setPost([...posts, post]) : setPost([post])
  }

  const handleAddReply = (reply, index) => {
    setPost(prevState => {
      const newState = [...prevState];
      newState[index].replies.push(reply)
      return newState;
    })
    setEditIndex(null);
  }

  const handleVotes = (vote, index) => {

    console.log(vote);

    setPost(prevState => {
      const newState = [...prevState];

      if (vote === 'up') {
        newState[index].votes += 1
      } else {
        newState[index].votes -= 1
      }
      return newState;
    })
  }



  return (
    <appContext.Provider
      value={{
        data: {
          posts,
          modal,
          editIndex,
        },
        actions: {
          setModal,
          handleAddPost,
          handleAddReply,
          setEditIndex,
          handleVotes,
        }
      }}
    >
      {props.children}
    </appContext.Provider>
  )
}
