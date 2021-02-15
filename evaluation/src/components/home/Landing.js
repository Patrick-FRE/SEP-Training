import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './AlbumContainer';


export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        <MoviesContainer />
      </div>
    );
  }
}


export default connect()(Landing);
