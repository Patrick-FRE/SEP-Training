import "./App.css";
import { Switch, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { INPUT_CHANGE, FETCH_ALBUMS } from "./redux/actions";
import { useHistory } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import AlbumList from "./components/AlbumList/AlbumList";

function App(props) {
  let history = useHistory();
  // const { ChangeKW, state, Add_Albums } = props
  const { INPUT_CHANGE, state, FETCH_ALBUMS } = props;

  const handleChange = (e) => {
    INPUT_CHANGE(e.target.value);
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
      search: "?query=" + `${state.input}`, 
      state: {
        update: true,
      },
    });
  return (
    <div className="App">
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
  INPUT_CHANGE: (input) => dispatch(INPUT_CHANGE(input)),
  FETCH_ALBUMS: (Albums) => dispatch(FETCH_ALBUMS(Albums)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
