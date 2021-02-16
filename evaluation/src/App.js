import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { SEARCH_ALBUM, FETCH_ALBUMS } from "./actions/actions";
import { useHistory } from "react-router-dom";
import  Nav  from './components/nav/nav.component';
import SearchBar from "./components/SearchBar/SearchBar";
import AlbumList from "./components/AlbumList/AlbumList";

function App(props) {
  let history = useHistory();
  // const { ChangeKW, state, Add_Albums } = props
  const { SEARCH_ALBUM, state, FETCH_ALBUMS } = props;

  const handleChange = (e) => {
    SEARCH_ALBUM(e.target.value);
  };

  const handleSubmit = (e) => {
    // console.log(`https://itunes.apple.com/search?term=${state.input}&media=music&entity=album&attribute=artistTerm&limit=50`, 'IN state');
    e.preventDefault();
    fetch(
      `https://itunes.apple.com/search?term=${state.input}&media=music&entity=album&attribute=artistTerm&limit=50`
    ).then((response) => response.json()).then((res) => {
      console.log(res.results);
      FETCH_ALBUMS(res.results);
    });
  };

    history.push({
      pathname: "/albumlist",
      search: "?query=" + `${state.input}`
    });
  return (
    <div className="App">
      <Nav/>
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Search here..."
            className="searchbar"
            onChange={handleChange}
          ></input>
          <button type="submit" className="button">
            Search
          </button>
        </form>
      </div>
      <div>
        <Switch>
          <Route
            path="/albumlist"
            render={() => <AlbumList albums={state.albums} />}
          />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => ({
  SEARCH_ALBUM: (input) => dispatch(SEARCH_ALBUM(input)),
  FETCH_ALBUMS: (Albums) => dispatch(FETCH_ALBUMS(Albums)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);