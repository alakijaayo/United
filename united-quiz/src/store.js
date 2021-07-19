import { createStore } from 'redux';

const initialState = {
  score: 0,
  question: 0,
  name: '',
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'addName':
      return { ...state, name: action.payload };
    case 'updateScore':
      return { ...state, score: state.score + 1};
    case 'updateQuestion':
      return { ...state, question: state.question + 1 };
    case 'resetState':
      return initialState;
    default:
      return {...state};      
  }
}

export const store = createStore(reducer)