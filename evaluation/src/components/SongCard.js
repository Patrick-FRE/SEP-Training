import React, { Component } from "react";

export class SongCard extends Component {
  render() {
    const { song } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={song.artworkUrl60} alt="" />
          <h5 className="text-light card-title">
            {song.artistName}
          </h5>
        </div>
      </div>
    );
  }
}

export default SongCard;
