import React, { Component, PropTypes } from 'react';
import Sidemenu from './side-menu';

class Root extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div>
        <Sidemenu />
        {this.props.children}
      </div>
    );
  }
}

export default Root;
