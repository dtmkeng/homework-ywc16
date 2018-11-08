import React, { Component } from 'react'
import './cardStatus.css'
import SucessCard from './sucessCard'
import FailCard from './failCard'
export default class CardStatus extends Component {
  render() {
    return (
      <div className="card-layout">
          <div className="card-1">
                <a><SucessCard/></a>
          </div>
          <div className="card-2">
                <a><FailCard/></a>
          </div>          
      </div>
    )
  }
}
