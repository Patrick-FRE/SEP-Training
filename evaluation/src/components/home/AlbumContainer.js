import React, { Component } from 'react';

import { connect } from 'react-redux';

import AlbumCard from './AlbumCard';

export class AlbumContainer extends Component {
  render() {
    const { albums } = this.props;
    let content = '';

    content =
    albums.Response === 'True'
        ? albums.Search.map((album, index) => (
            <AlbumCard key={index} album={album} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  albums: state.albums.albums
});

export default connect(mapStateToProps)(AlbumContainer);
