import React, { Component, PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string,
};

class SideMenu extends Component {

  _renderLinks(links) {
    return links.map(link => {
      return <div key={link.name}><a href={link.src}>{link.name}</a></div>;
    });
  }

  render() {
    const links = [
      { name: 'Home', src: '/' },
    ];

    return <div className={this.props.className}>{this._renderLinks(links)}</div>;
  }

}

SideMenu.propTypes = propTypes;

export default SideMenu;
