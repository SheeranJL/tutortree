import {React, useContext} from 'react';
import {appContext} from '../../../context/context.js';
import './upvote.scss';

const Upvote = ({votes, postId}) => {

  //import context state//
  const {actions: {handleVotes}} = useContext(appContext)


  //Logic to handle upvoting/downvoting//
  const handleVoteAction = (sentiment) => {
    sentiment === 'increase' ? handleVotes('up', postId) : handleVotes('down', postId)
  }


  return (
    <div className='upvote'>
      <span onClick={() => handleVoteAction('increase')} className='vote-icon'>▲</span>
      <span className='vote-count'>{votes}</span>
      <span onClick={() => handleVoteAction('decrease')} className='vote-icon'>▼</span>
    </div>
  )
}

export default Upvote;
