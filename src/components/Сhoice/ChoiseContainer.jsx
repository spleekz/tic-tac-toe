import { connect } from 'react-redux';
import { setItem, startGame } from '../../redux/GameReducer';
import Choice from './Choice';

let mapStateToProps = (state) => {
  return {
    gameOnProgress: state.gameOnProgress,
    isX: state.isX
  };
};
export default connect(mapStateToProps, { setItem, startGame })(Choice);
