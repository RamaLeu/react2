import './App.css';
import Cats from './Cats';
import Todo from './Todo';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Joke from './Joke';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cats">Cats</Link>
            </li>
            <li>
              <Link to="/joke">Insult me!</Link>
            </li>
            <li>
              <Link to="/todo">Tasks list</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/todo">
            <Todo/>
          </Route>
          <Route path="/joke">
            <Joke/>
          </Route>
          <Route path="/cats">
            <Cats/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
