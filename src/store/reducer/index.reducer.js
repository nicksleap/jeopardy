import {combineReducers} from 'redux';
import {
  questionsHasError,
  questionsHasLoading,
  questions} from './questions.reducer';

export default combineReducers({
  questionsHasError,
  questionsHasLoading,
  questions});
