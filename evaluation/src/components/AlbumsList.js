import React, { Component } from "react";
import { connect } from "react-redux";
import SongCard from './SongCard';
export class AlbumsList extends Component {
  render() {
    const { songs } = this.props;
    let content = '';

    content =
      songs.length ? songs.Search.map((song, index) => (
            <SongCard key={index} song={song} />
          ))
        : null;
    return <div className="row">{content}</div>;
  }
}
const mapStateToProps = state => ({
  songs: state.songs.songs
});
export default connect(mapStateToProps)(AlbumsList);
