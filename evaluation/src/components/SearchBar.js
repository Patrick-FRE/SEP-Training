import React, { Component } from "react";
import { connect } from "react-redux";

import {
  searchSong,
  fetchSongs,
  setLoading,
} from "../actions/SearchActions";

export class SearchBar extends Component {
  onChange = (e) => {
    this.props.searchSong(e.target.value);
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.fetchSongs(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search..."
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
    text: state.songs.text
  });
export default connect(
    mapStateToProps,
    { searchSong, fetchSongs, setLoading }
  )(SearchBar);