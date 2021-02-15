import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AlbumCard extends Component {
  render() {
    const { album } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={album.artworkUrl100}/>
          <h5 className="text-light card-title">
            {album.collectionName} 
          </h5>
          
        </div>
      </div>
    );
  }
}

export default AlbumCard;
