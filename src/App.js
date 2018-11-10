import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home' 
import LaunchStatus from './components/launch/launchStatus'
import ReuseStatus from './components/reuse/reuseStatus'
import LastStatus from './components/last/lastStatus'
import Page404 from './components/page404'
import 'bulma/css/bulma.css'
import { Switch ,Route,NavLink } from 'react-router-dom' 
class App extends Component {
  render() {
    return (
      <div className="App-header">
        <div >
        <nav className="navbar is-dark navbar-r" role="navigation" aria-label="main navigation">
          <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://www.spacex.com">
                  <img src={'https://www.spacex.com/sites/all/themes/spacex2012/logo.png'} alt="spacex-logo" width="112" height="28" />
                </a>
              </div>
          <div className="navbar-menu">
          <div className="navbar-end">
              <NavLink exact to="/" activeClassName="is-active" className="navbar-item">Home</NavLink>
              <NavLink to="/launch" activeClassName="is-active" className="navbar-item">Launch</NavLink>
              <NavLink to="/reuse" activeClassName="is-active" className="navbar-item">Reuse</NavLink>
              <NavLink to="/last" activeClassName="is-active" className="navbar-item">Last</NavLink>
          </div>
          </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launch" component={LaunchStatus} />
          <Route exact path="/reuse" component={ReuseStatus} />
          <Route exact path="/last" component={LastStatus} />
          <Route component={Page404} />
        </Switch>
        </div>
      
      </div>
    );
  }
}
export default App;