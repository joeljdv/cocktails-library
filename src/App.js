import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Cocktails from './containers/Cocktails'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cocktails' component={Cocktails} />
          </Switch>  
        </div>
      </Router>   
    )
  }
}
