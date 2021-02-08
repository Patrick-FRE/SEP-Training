import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Buy from './Buy';
import Calc from './Calc';
import { StonksProvider } from './StonksStore';
import './Stonks.css';

export default function StonksApp() {
  return (
    <BrowserRouter>
      <StonksProvider>
        <header>StonksApp</header>
        <Link to="/buy">Buy</Link>
        <Link to="/calc">Calc</Link>
        <Switch>
          <Route path="/buy">
            <Buy />
          </Route>
          <Route path="/calc">
            <Calc />
          </Route>
        </Switch>
      </StonksProvider>
    </BrowserRouter>
  );
}
