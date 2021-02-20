import React from 'react';
import { Link } from 'react-router-dom';

const GamesCard = (props) => {
   return (
     <>
   <div>{props.game.title}</div>
   <button onClick={() => props.deleteGame(props.game._id)}>Delete</button>
   <Link to={`/editgame/${props.game._id}`}><button>Update</button></Link>
   <hr/>
   <br/>
   <br/>
     </>
   ) 
}

export default GamesCard;