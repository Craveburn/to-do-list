import React, { Component } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/"
            render={props => <Home {...props} /> } />
            {/*  component={() => <Home />} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;