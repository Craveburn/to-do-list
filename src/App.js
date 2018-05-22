import React, { Component } from 'react'
import Home from './Home'
import Contact from './Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/Contact" component={() => <Contact />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;