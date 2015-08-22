import React, { Component } from 'react';
import { connect } from 'react-redux';

class Root extends Component {
  componentDidMount() {
    const { falcor } = this.props;

    var log = console.log.bind(console);
    falcor.getValue(['postcards', 0, 'name']).then(log);
  }

  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    falcor: state.falcor
  };
}

export default connect(mapStateToProps)(Root);
