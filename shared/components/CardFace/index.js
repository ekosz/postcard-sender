import React, { Component, PropTypes } from 'react';
import cssModule from 'react-css-modules';
const styles = require('./styles.css');

const propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

class CardFace extends Component {
  componentDidMount() {
    const { htmlContent } = this.props;
    const iframe = React.findDOMNode(this.refs.iframe);

    iframe.contentWindow.document.write(htmlContent);
  }

  render() {
    return (
      <iframe ref="iframe" styleName="card-face" className={this.props.className} />
    );
  }
}

CardFace.propTypes = propTypes;

export default cssModule(CardFace, styles);
