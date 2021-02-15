import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import AlbumsList from "./AlbumsList";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchBar />
        {loading ? <AlbumsList /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.songs.loading,
});

export default connect(mapStateToProps)(Landing);
