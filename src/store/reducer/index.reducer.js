import {combineRedusers} from 'redux';
import {
  questionsHasError,
  questionsHasLoading,
  questions} from './questions.reducer';

export default combineRedusers({
  questionsHasError,
  questionsHasLoading,
  questions});
