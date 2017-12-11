import React from 'react'
import { connect } from 'react-redux'
import List from './list.js'
import { addText } from '../actions/todoActions.js'

@connect((store) => {
  return {
    todo: store.todos,
  }
})

class Todo extends React.Component {
  handleUser(e) {
    this.props.dispatch(addText(e.target.value))
  }

  render() {
    return (
      <div>
        <h1>My todo list</h1>
        <p>{this.props.todo.test}</p>
        <form>
          <input  type="text"
                  onChange={this.handleUser.bind(this)}/>
          <input type="submit" value="submit"/>
        </form>
        <ul>
          {
            this.props.todo.todo.map((todo, i) =>
              <List key={i}todo={todo}/>)
          }
        </ul>
      </div>
    )
  }
}

export default Todo