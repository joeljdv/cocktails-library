import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Cocktails from './containers/Cocktails'
import CocktailInfo from './containers/CocktailInfo'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Router>
         <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cocktails' component={Cocktails} />
            <Route exact path='/cocktails/:id' component={CocktailInfo} />
          </Switch>
        </div>
      </Router>   
    )
  }
}
