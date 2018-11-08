import React, { Component } from 'react'
import './cardStatus.css'
import LaunchCard from './launchCard'
import ReuseCard from './reuseCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class CardStatus extends Component {
  constructor(){
      super();
      this.state = {
         launchCount:0,
         reuseCount:0
      }
  }
  componentDidMount(){
    let launchCount = 0
    let reuseCount =  0
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res =>{
        res.data.forEach(data=>{
            const reuse  = data.rocket.second_stage.payloads[0].reused
            if(reuse===true){
                reuseCount = reuseCount +1
            }if(data.flight_number)
                launchCount +=1
            
        })
        this.setState({launchCount:launchCount,reuseCount:reuseCount})
    })
  }
  render() {
    return (
      <div className="card-layout">
          <div className="card-1">
                <Link to="/launch"><LaunchCard count={this.state.launchCount} /></Link>
          </div>
          <div className="card-2">
                <Link to="/reuse"><ReuseCard count={this.state.reuseCount}/></Link>
          </div>          
      </div>
    )
  }
}
