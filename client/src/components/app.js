import React from 'react';
import Home from './home.js';
import Popular from './popular.js';
import Nav from './nav.js';
import Todo from './todo.js';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';

connect((store) => {
  return {
    todo: store.todo
  }
})

const Router = BrowserRouter;

class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
  const { todo } = this.props
    return(
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/popular' component={Popular} />
          <Route path='/todo' component={Todo} />
          {console.log(this.props)}
        </div>
      </Router>
    )
  }
}


export default App;