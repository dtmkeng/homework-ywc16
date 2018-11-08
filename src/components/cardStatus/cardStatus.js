import React, { Component } from 'react'
import './cardStatus.css'
import SucessCard from './sucessCard'
import FailCard from './failCard'
import { Link } from 'react-router-dom'
export default class CardStatus extends Component {
  render() {
    return (
      <div className="card-layout">
          <div className="card-1">
                <Link to="/sucess"><SucessCard/></Link>
          </div>
          <div className="card-2">
                <Link to="/fail"><FailCard/></Link>
          </div>          
      </div>
    )
  }
}
