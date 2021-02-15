import "./App.css";
import Header from "./components/Header";
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
      <Header />

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
