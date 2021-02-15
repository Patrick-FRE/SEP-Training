import React, {useEffect}from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "../redux";

class AlbumContainer extends React.Component {

  constructor(props) {
    super(props);
    console.log('this.albumData')

    this.albumData = this.props
    
    //console.log(this.props)
  }
  
  

  render() {
    return this.albumData.loading ? (
      <h2>Loading</h2>
    ) : this.albumData.error ? (
      <h2>{this.albumData.error}</h2>
    ) : (
      <div>
        <h2>ALbum List</h2>
        <div>
          {this.albumData &&
            this.albumData.collectionName &&
            this.albumData.collectionName.map((album) => <p>{album.name}</p>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    album: state.album,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);
