/* eslint-disable require-jsdoc */

import React from 'react';
import SubjectList from './components/subjectList';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
    };
  }
  render() {
    return (
      <SubjectList />
    );
  }
}

export default Game;
