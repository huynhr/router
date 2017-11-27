import React from 'react'
import Home from './home.js'
import Popular from './popular.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Home />
        <Popular />
      </div>
    )
  }
}


export default App;