import {React} from 'react';
import './upvote.scss';

const Upvote = ({votes, setVotes}) => {

  return (
    <div className='upvote'>
      <span onClick={() => setVotes(prevState => prevState += 1)} className='vote-icon arr-up'></span>
      <span className='vote-count'>{votes}</span>
      <span onClick={() => setVotes(prevState => prevState -= 1)} className='vote-icon arr-down'></span>
    </div>
  )
}

export default Upvote;
