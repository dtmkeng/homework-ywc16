import React, { Component } from 'react'
import CardStatus from '../cardStatus/cardStatus'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="bg-home">
         <div className="logo-speac">SpaceX Status Launch</div>
         <div>
            <CardStatus/>
         </div>
         <br/>
         <div className="thank">Thank You <a href="https://github.com/r-spacex/SpaceX-API" >SpaceX REST API</a></div>
      </div>
    )
  }
}
