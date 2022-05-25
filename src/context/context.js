import React, {createContext, useState} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [posts, setPost] = useState([]);
  const [modal, setModal] = useState(false);

  const handleAddPost = (post) => {
    if (posts.length) {
      setPost([...posts, post])
    } else {
      setPost([post])
    }
    console.log(posts)
  };

  const handleVote = () => {
    console.log('test vote')
  }


  return (
    <appContext.Provider
      value={{
        data: {
          posts,
          modal,
        },
        actions: {
          handleVote,
          setModal,
          handleAddPost,
        }
      }}
    >
      {props.children}
    </appContext.Provider>
  )
}
