import SearchBar from "./components/SearchBar/SearchBar";
import PageContent from "./components/PageContent/PageContent";
import {
  Switch,
  Route,
  Redirect,
  // useHistory,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Gallery" />
        </Route>
        <Route path="/Gallery" component={PageContent} />
      </Switch>
    </div>
  );
}

export default App;
