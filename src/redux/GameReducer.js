let SET_STEP = 'SET_STEP',
  CHECK_FOR_WIN = 'CHECK_FOR_WIN',
  START_GAME = 'START_GAME',
  END_GAME = 'END_GAME',
  SET_ITEM = 'SET_ITEM';

let initialState = {
  squares: [
    { name: null, id: 0 },
    { name: null, id: 1 },
    { name: null, id: 2 },
    { name: null, id: 3 },
    { name: null, id: 4 },
    { name: null, id: 5 },
    { name: null, id: 6 },
    { name: null, id: 7 },
    { name: null, id: 8 },
  ],
  winCombos: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ],
  isX: null,
  steps: 0,
  gameOnProgress: false,
  winner: { name: null, combo: [] }
}
let gameReducer = (state = initialState, action) => {
  if (action.type === SET_ITEM) {
    return {
      ...state,
      isX: action.value
    }
  }
  if (action.type === START_GAME) {
    return {
      ...state,
      gameOnProgress: true
    }
  }
  if (action.type === SET_STEP) {
    return {
      ...state,
      squares: state.squares.map((square) => {
        if (square.id === action.id) {
          if (state.isX) {
            return {
              ...square,
              name: 'X'
            }
          }
          else {
            return {
              ...square,
              name: 'O'
            }
          }
        }
        return { ...square }
      }),
      isX: !state.isX,
      steps: state.steps + 1
    }
  }
  if (action.type === CHECK_FOR_WIN) {
    return {
      ...state,
      winner: state.winCombos.reduce((sum, combo) => {
        if (state.squares[combo[0]].name &&
          state.squares[combo[0]].name === state.squares[combo[1]].name &&
          state.squares[combo[0]].name === state.squares[combo[2]].name) {
          sum = state.squares[combo[0]].name
          return {
            ...state.winner,
            name: sum,
            combo: [...state.winner.combo, state.squares[combo[0]].id, state.squares[combo[1]].id, state.squares[combo[2]].id]
          }
        }
        else if ((state.steps === 9) && ((sum.name !== 'X') && (sum.name !== 'O'))) {
          sum = 'Ничья'
          return {
            ...state.winner,
            name: sum,
          }
        }
        return sum
      }, state.winner)
    }
  }
  if (action.type === END_GAME) {
    return {
      ...state,
      gameOnProgress: false,
      squares: state.squares.map((square) => {
        return {
          ...square,
          name: null
        }
      }),
      winner: {
        name: null,
        combo: []
      },
      steps: 0,
      isX: null
    }
  }
  return state
}
export const startGame = () => {
  return {
    type: START_GAME
  }
}
export const setItem = (value) => {
  return {
    type: SET_ITEM,
    value
  }
}
export const setStep = (id) => {
  return {
    type: SET_STEP,
    id
  }
}
export const checkForWin = () => {
  return {
    type: CHECK_FOR_WIN
  }
}
export const endGame = () => {
  return {
    type: END_GAME
  }
}
export default gameReducer