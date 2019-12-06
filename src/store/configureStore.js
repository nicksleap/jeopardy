/* eslint-disable require-jsdoc */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import rootReducer from './reducer/index.reducer';

export default function configureStore(initialState={}) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk),
  );
}
