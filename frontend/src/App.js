import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import main from './page_component/main'

class App extends Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Router>
        <div className="App">
          <h1>hello</h1>
          <main></main>
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={main} />
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
