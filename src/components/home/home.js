import React, { Component } from 'react'
import CardStatus from '../cardStatus/cardStatus'
import './home.css'
export default class Home extends Component {
  render() {
    return (
      <div>
         <div className="logo-speac">logo</div>
         <div>
            <CardStatus/>
         </div>
      </div>
    )
  }
}
