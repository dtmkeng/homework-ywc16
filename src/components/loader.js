import React, { Component } from 'react'
import './loader.css'
export default class Loader extends Component {
  render() {
    return (
      <div>
        <img className="loder" src={require('./rocket.png')}  alt="loader" />
        <div>Loading...</div>
      </div>
    )
  }
}
