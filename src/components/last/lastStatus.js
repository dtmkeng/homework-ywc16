import React, { Component } from 'react'
import './lastStatus.css'
import LauchTimeLine from '../launch/lauchTimeLine'
import Status from './status'
import axios from 'axios'
import RocketDetail from './rocketDetail'
import Loader from '../loader'
export default class LastStatus extends Component {
    constructor(){
        super();
        this.state={
            missionname:{},  
            color:['#8884d8', '#83a6ed','#8dd1e1','#82ca9d', '#a4de6c','#d0ed57','#ffc658','#8884d8','#82ca9d','#83a6ed'],
            rocketdetail:{},
            loader:false
        }
      }
 componentDidMount(){
     let missionname  = {}
     let rocketdetail = {}
     let ran = Math.floor(Math.random()*10)
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res =>{
          let  data = res.data[res.data.length-1]
          const year = data.launch_year
          const missionnames  = data.mission_name
          const detail = data.details
          const rocketname = data.rocket.rocket_name
          const launchsite = data.launch_site.site_name_long
          const img = (data.links.mission_patch_small !== null) ? data.links.mission_patch_small : require('../rocket.png')
        missionname = {color:this.state.color[ran],name:data.mission_name,
            detail:data.rocket.rocket_name,
            launchsucess:data.launch_success,
            fairings:data.rocket.fairings.reused
        }
        rocketdetail = {
            name:missionnames,
            year:year,
            detail:detail,
            img:img,
            rocketname:rocketname,
            launchsite:launchsite
          } 
        // console.log(res.data[res.data.length-1])
        this.setState({missionname:missionname,rocketdetail:rocketdetail,loader:true})
    })
    // console.log(th)
    
 }
  render() {
    const {missionname,rocketdetail} = this.state
    console.log(rocketdetail)
    return (
      <div className="bg-last">
         {this.state.loader?<div>
            <div className="title-last">Launch Last Status</div>
           <div className="card-layout-chart">
                <div className="card-1-chart">
                        {/* Name Missiom */}
                        <div className="sublast">Name Missiom</div>
                        <LauchTimeLine color={missionname.color} 
                                        name={missionname.name}
                                        detail={missionname.detail}
                        />

                </div>
                <div className="card-1-chart">
                        {/* Launch Status */}
                        <div className="sublast">Launch Status</div>
                        <Status status={missionname.launchsucess}/>
                </div>
                <div className="card-1-chart">
                        {/* Reuse */}
                        <div className="sublast">Fairings Reuse</div>
                        <Status status={missionname.fairings}/>
                </div>
                <div className="card-1-chart">
                        {/* Detail */}
                        <div className="sublast">Detail</div>
                        <RocketDetail name={rocketdetail.name} detail={rocketdetail.detail} img={rocketdetail.img} year={rocketdetail.year} launchsite={rocketdetail.launchsite}/>
                </div>
            </div>
         </div>: <div style={{textAlign:'center',paddingTop:'20%'}}><Loader/></div>
             }
           
      </div>
    )
  }
}
