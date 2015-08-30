import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { retrievePath } from '../actions/falcor';
import Postcards from '../components/Postcards';

class PostcardsContainer extends Component {
  static propTypes = {
    postcards: PropTypes.object,
  };

  render() {
    return <Postcards {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    postcards: state.entities.get('postcards'),
  };
}

export default connect(mapStateToProps, { retrievePath })(PostcardsContainer);
