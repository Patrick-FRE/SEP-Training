import "./App.css";
import SearchBar from "./components/SearchBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AlbumList from "./components/AlbumList";

function App() {
  return (
    <Router>
      <header>
        <SearchBar />
      </header>

      <main>
        <Switch>
          <Route path="/albumlist" exact component={AlbumList} />
          <Redirect from="/" to="/albumlist" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
