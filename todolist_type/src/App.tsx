import './App.css';
import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Todolist from "./components/todolist/todolist";
import Stat from "./components/stat/stat";
import { TodolistProvider } from "./providers/todoProvider";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
        <Header></Header>
        <TodolistProvider>
          <main className="container">
            <Switch>
              <Route path="/todolist"><Todolist></Todolist></Route>
              <Route path="/stat"><Stat></Stat></Route>
              <Route path="/"><Todolist></Todolist></Route>
            </Switch>
          </main>
        </TodolistProvider>
      </Router>
    </Layout>
  );
}

export default App;
