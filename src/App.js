import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>  
        </div>
      </Router>   
    )
  }
}
