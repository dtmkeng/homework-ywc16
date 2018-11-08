import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home'
import 'bulma/css/bulma.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Home/>
        </div>
      </div>
    );
  }
}
export default App;