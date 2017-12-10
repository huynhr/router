import React from 'react';
import Home from './home.js';
import Popular from './popular.js';
import Nav from './nav.js';
import Todo from './todo.js';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

@connect((store) => {
  return {
    todo: store.todos
  }
}, )


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }


  render() {
  const Router = BrowserRouter;
  const { store } = this.props
    return(
      <Router>
        <div>
          {console.log(this.props)}
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