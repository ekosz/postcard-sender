import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrievePath } from '../actions/falcor';

class Postcards extends Component {
  componentDidMount() {
    this.props.retrievePath('postcards[0].name');
  }

  render() {
    const { postcards } = this.props;

    let output;

    if (!postcards) {
      output = <h1>Loading...</h1>;
    } else if (!postcards.get('0')) {
      output = <h1>No Postcards created yet</h1>;
    } else {
      output = <ul>{postcards.map(card => { return <li>{card.get('name')}</li>; })}</ul>;
    }

    return output;
  }
}

function mapStateToProps(state) {
  return {
    postcards: state.entities.get('postcards'),
  };
}

export default connect(mapStateToProps, { retrievePath })(Postcards);
