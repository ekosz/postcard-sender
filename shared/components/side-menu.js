import React, { Component } from 'react';

export default class SideMenu extends Component {

  _renderLinks(links) {
    return links.map(link => {
      return <div key={link.name}><a href={link.src}>{link.name}</a></div>;
    });
  }

  render() {
    const links = [
      { name: 'Home', src: '/' },
    ];

    return <div>{this._renderLinks(links)}</div>;
  }

}
