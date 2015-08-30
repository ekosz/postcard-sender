import React, { Component, PropTypes } from 'react';
import cssModule from 'react-css-modules';
import CardFace from '../CardFace';
const styles = require('./styles.css');

class Postcard extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    fronthtml: PropTypes.string,
    backhtml: PropTypes.string,
  };

  render() {
    const { name, fronthtml: frontHTML, backhtml: backHTML } = this.props;

    return (
      <div styleName="container">
        <div styleName="name">{name}</div>
        <div className="flex flex-wrap">
          <CardFace className="flex-auto" htmlContent={frontHTML} />
          <CardFace className="flex-auto" htmlContent={backHTML} />
        </div>
      </div>
    );
  }
}

export default cssModule(Postcard, styles);
