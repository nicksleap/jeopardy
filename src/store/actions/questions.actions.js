/* eslint-disable require-jsdoc */

// Если итемы не полученны
export function questionHasErrored(bool) {
  return {
    type: 'QUESTIONS_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Если ожидаем получение итемов
export function questionsIsLoading(bool) {
  return {
    type: 'QUESTIONS_IS_LOADING',
    isLoading: bool,
  };
}

// Если итемы успешно получены
export function questionsFetchDataSuccess(questions) {
  return {
    type: 'QUESTIONS_FETCH_DATA_SUCCESS',
    questions,
  };
}


// action creater
export function questionsFetchData(url) {
  return (dispatch) => {
    // set loading state
    dispatch(questionsIsLoading(true));

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
        .then((response) => {
          if (!response.ok) { // if response returned error status
            throw Error(response.statusText);
          }
          dispatch(questionsIsLoading(false));
          return response;
        })
        .then((response) => response.json())
        // if response returned with success
        .then((items) => dispatch(questionsFetchDataSuccess(items)))
        // if fetch do not compleate
        .catch(() => dispatch(questionHasErrored(true)));
  };
}
