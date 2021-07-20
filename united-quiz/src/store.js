import { createStore } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  score: 0,
  question: 0,
  name: '',
}

const persistConfig = {
  key: "root",
  storage,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'addName':
      return { ...state, name: action.payload };
    case 'updateScore':
      return { ...state, score: state.score + 1};
    case 'updateQuestion':
      return { ...state, question: state.question + 1 };
    case 'resetState':
      return state = initialState;
    default:
      return {...state};      
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState);

export const persistor = persistStore(store);
