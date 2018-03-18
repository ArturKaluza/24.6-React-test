import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <div className="Score">
      <button className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</button>
      <span className="Player__score">{props.score}</span>
      <button className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</button>
    </div>
    <button className="Player__button delete" onClick={() => props.onPlayerRemove()} >x</button>
  </li>
);

export default Player;