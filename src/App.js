import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home' 
import SucessStatus from './components/sucess/sucessStatus'
import FailStatus from './components/fail/failStatus'
import Page404 from './components/page404'
import 'bulma/css/bulma.css'
import { Switch ,Route } from 'react-router-dom' 
class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sucess" component={SucessStatus} />
          <Route exact path="/fail" component={FailStatus} />
          <Route component={Page404} />
        </Switch>
        </div>

      </div>
    );
  }
}
export default App;