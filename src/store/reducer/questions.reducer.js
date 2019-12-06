
// Редьюсер для Has Error
export const questionsHasError = (state=false, action) => {
  switch (action.type) {
    case 'QUESTIONS_HAS_ERRORED':
      return action.hasEroor;
    default:
      return state;
  }
};

export const questionsHasLoading = (state=false, action) => {
  switch (action.type) {
    case 'QUESTIONS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const questions = (state=[], action) => {
  switch (action.type) {
    case 'QUESTIONS_FETCH_DATA_SUCCESS':
      return action.questions;
    default:
      return state;
  }
};
