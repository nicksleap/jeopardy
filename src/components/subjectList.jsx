/* eslint-disable require-jsdoc */
import React from 'react';
import propTypes from 'prop-types';

import Square from './square';
import {connect} from 'react-redux';
import {questionsFetchData} from '../store/actions/questions.actions';

const mapStateToProps = (state) => {
  return ({
    questions: state.questions,
    hasErrored: state.questionsHasErrored,
    isLoading: state.questionsIsLoading,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchData: (url) => dispatch(questionsFetchData(url)),
  });
};

class SubjectList extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.questions.map((item, key) => (
          <Square {...item} key={key}/>
        ))}
      </ul>
    );
  }
}

SubjectList.propTypes = {
  fetchData: propTypes.func,
  hasErrored: propTypes.bool,
  isLoading: propTypes.bool,
  questions: propTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
