import React from "react";
import { fetchAlbums } from "../../redux/";
import { actionCreater } from "../../redux/search/searchRedux";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    if (e.key === "Enter") {
      this.props.updateSearch(e.target.value);
      this.props.fetchAlbums(e.target.value);
    }
  }

  render() {
    return (
      <Router className='center'>
        <div>
          <Switch>
            <Route path="/albumlist/:query" >
              <Container fluid="md">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search..."
                  onKeyDown={this.handleUserInput}
                  value={this.props.searchText}
                ></input>

                {this.props.albumData.loading ? (
                  <h2>Loading</h2>
                ) : this.props.albumData.error ? (
                  <h2>{this.props.albumData.error}</h2>
                ) : (
                  <div>
                    <h2>Album List</h2>
                    {this.props.albumData.album.map((album) => {
                      return (
                        <Container>
                          <Row>
                            <img
                              // class="album-cover"
                              // id="${album.collectionId}"
                              src={`${album.artworkUrl100}`}
                            ></img>
                            <p>{album.collectionName}</p>
                          </Row>
                        </Container>
                      );
                    })}
                  </div>
                )}
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  console.log("mapStateToProps", state);
  return {
    searchText: state.searchText,
    albumData: state.album,
  };
};

const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  console.log(dispatch);
  return {
    updateSearch: (searchText) =>
      dispatch(actionCreater.updateSearch(searchText)),
    fetchAlbums: (searchText) => dispatch(fetchAlbums(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
