import React, { Component, PropTypes } from 'react';
import Sidemenu from '../side-menu';
import cssModules from 'react-css-modules';

const styles = require('./styles.css');

class Root extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    return (
      <div className="container" styleName="container">
        <div className="clearfix">
          <Sidemenu className="col col-1" />
          <div className="col col-11">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default cssModules(Root, styles);
