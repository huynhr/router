import React from 'react';
import Home from './home.js';
import Popular from './popular.js';
import Nav from './nav.js';
import Todo from './todo.js';

import { BrowserRouter, Route } from 'react-router-dom';

const Router = BrowserRouter;

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/popular' component={Popular} />
          <Route path='/todo' component={Todo} />
        </div>
      </Router>
    )
  }
}


export default App;