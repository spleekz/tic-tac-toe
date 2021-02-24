import React from 'react';
import GameContainer from '../Game/GameContainer';
import './Choice.css'

const Choice = (props) => {
  if (props.gameOnProgress) {
    return (
      <GameContainer />
    )
  }
  let startGame = (value) => {
    props.setItem(value);
    setTimeout(props.startGame, 1000)
  }
  return (
    <div className='choice'>
      <div className="choice-title">Кто будет делать первый ход?</div>
      <div className="choice-field">
        <button className={props.isX === true ? 'item item-active' : 'item'} onClick={() => { startGame(true) }} disabled={props.isX !== null}>
          <div className="item-content">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </button>
        <button className={props.isX === false ? 'item item-active' : 'item'} onClick={() => { startGame(false) }} disabled={props.isX !== null}>
          <div className="item-content">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Choice;
