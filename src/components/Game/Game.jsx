import React from 'react';
import './Game.css'

const Game = (props) => {
  let item, disable, steps, stepsWriting;
  let setStep = (squareId) => {
    props.setStep(squareId);
    props.checkForWin();
  }
  if (props.winner.name) {
    steps = props.squares.filter((square) => square.name === props.winner.name).length;
    if ((steps > 2) && (steps < 5)) {
      stepsWriting = ' хода'
    }
    else {
      stepsWriting = ' ходов'
    }
  }
  return (
    <div className="game">
      <div className="game-status">
        <div className="game-status-text">
          {props.winner.name ? props.winner.name === 'Ничья' ? 'Ничья' :
            'Игрок ' + props.winner.name + ' выиграл за ' + steps + stepsWriting :
            props.isX ? 'Ходит игрок X' : 'Ходит игрок O'}
        </div>
      </div>
      <div className='board'>
        {props.squares.map((square) => {
          if (props.winner.name) {
            disable = true
          }
          else if (square.name) {
            disable = true
          }
          else {
            disable = false
          }

          if (square.name === 'X') {
            item = <i className="fa fa-times" aria-hidden="true"></i>;
          }
          else if (square.name === 'O') {
            item = <i className="fa fa-circle-o" aria-hidden="true"></i>;
          }
          else {
            item = null;
          }
          return (
            <button key={square.id} className={props.winner.combo.some((id) => id === square.id) ? 'square win' : props.winner.name === 'Ничья' ? 'square draw' : 'square'} disabled={disable} onClick={() => { setStep(square.id) }}>
              {item}
            </button>
          )
        })}
      </div>
      {props.winner.name ? <button className='restart' onClick={props.endGame}>Заново</button> : null}
    </div>
  );
}

export default Game;
