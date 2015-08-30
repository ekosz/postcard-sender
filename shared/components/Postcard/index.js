import React, { Component, PropTypes } from 'react';

export default class Postcard extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;

    return (
      <div>
        <span>{name}</span>
      </div>
    );
  }
}
