import React, { Component } from 'react'
import './reuse.css'
import axios from 'axios'
import ReuseCount from './reuseCount'
import ReuseRocketDetail from './reuseRocketDetail'
import Loader from '../loader'
export default class ReuseStatus extends Component {
  constructor(){
     super();
     this.state = {
         countReuse:0,
         time:0,
         reuseDetail:[],
         loader:false
     }
  }
  componentDidMount(){
    let countReuse = 0
    let time = 0
    let reuseDetail =[]
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res =>{
         res.data.forEach(data => {
          const reuse  = data.rocket.second_stage.payloads[0].reused
          const year = data.launch_year
          const missionname  = data.mission_name
          const detail = data.details
          const rocketname = data.rocket.rocket_name
          const launchsite = data.launch_site.site_name_long
          const img = (data.links.mission_patch_small !== null) ? data.links.mission_patch_small : require('../rocket.png')
          if(reuse){
              // console.log(data)
              reuseDetail.push({
                name:missionname,
                year:year,
                detail:detail,
                img:img,
                rocketname:rocketname,
                launchsite:launchsite
              })
              countReuse ++;
          }
          time ++;
         });
         this.setState({countReuse:countReuse,time:time,reuseDetail:reuseDetail,loader:true})
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="bg-reuse">
          {this.state.loader ? <div>
            <div className="title-reuse">Reuse  Rocket</div>
          <div className="card-layout-chart">
               <div className="card-1-chart">
                  <ReuseCount data={this.state.countReuse} name="Time ( Reuse / Launch )" time={this.state.time}/>
               </div>
               <div className="card-1-chart">
               {
                 this.state.reuseDetail.map((data,id)=>{
                    return <ReuseRocketDetail data={data} key={id}/>
                 })
               }
                  
               </div>
          </div>
          </div> : <div style={{textAlign:'center',paddingTop:'20%'}}><Loader/></div>}
          
      </div>
    )
  }
}
