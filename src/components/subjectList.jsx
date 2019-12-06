/* eslint-disable require-jsdoc */
import React from 'react';
import Square from './square';

class SubjectList extends React.Component {
  render() {
    return (
      <Square {...this.peops} />
    );
  }
}


export default SubjectList;
