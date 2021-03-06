import React, { Component, PropTypes } from 'react';
import Postcard from '../Postcard';

export default class Postcards extends Component {
  static propTypes = {
    retrievePath: PropTypes.func.isRequired,
    postcards: PropTypes.object,
  };

  componentDidMount() {
    const { retrievePath } = this.props;

    retrievePath('postcards[0..2].["id", "name", "fronthtml", "backhtml"]');
  }

  render() {
    const { postcards } = this.props;

    let output;

    if (!postcards) {
      output = <h1>Loading...</h1>;
    } else if (!postcards.get('0')) {
      output = <h1>No Postcards created yet</h1>;
    } else {
      output = this._renderPostcards(postcards);
    }

    return output;
  }

  _renderPostcards(postcards) {
    return (
      <div className="flex flex-column">
        { postcards.map(card => <Postcard key={card.get('id')} {...card.toJS()} />) }
      </div>
    );
  }
}
