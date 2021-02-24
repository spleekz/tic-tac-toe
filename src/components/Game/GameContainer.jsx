import { connect } from 'react-redux';
import { checkForWin, setStep, endGame } from '../../redux/GameReducer';
import Game from './Game';

let mapStateToProps = (state) => {
  return {
    squares: state.squares,
    isX: state.isX,
    winner: state.winner,
    gameOnProgress: state.gameOnProgress,
    steps: state.steps
  };
};
export default connect(mapStateToProps, { setStep, checkForWin, endGame })(Game);
