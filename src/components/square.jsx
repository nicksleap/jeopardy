/* eslint-disable require-jsdoc */
import React from 'react';
import propTypes from 'prop-types';

class Square extends React.Component {
  render() {
    return (
      <div id={this.props.id}>{this.props.label}</div>
    );
  }
}

Square.propTypes = {
  label: propTypes.string,
  id: propTypes.any,
};

export default Square;
