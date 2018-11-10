import React, { Component } from 'react'
// import DetailCard from '../cardStatus/detailCard'
import BarChart from '../chart/barChart'
import LauchTimeLine  from './lauchTimeLine'
import TotalMassPayload from './totalMassPayload'
import Loader from '../loader'
import './launch.css'
import axios from 'axios'
export default class LaunchStatus extends Component {
  constructor(){
    super()
    this.state = {
      launch:[],
      orbit:[],
      data:[],
      loder:false,
      launchSite:[],
      launchLocationSite:[],
      lanchTimeLine:[],
      payloadmassKg:0,
      color:['#8884d8', '#83a6ed','#8dd1e1','#82ca9d', '#a4de6c','#d0ed57','#ffc658','#8884d8','#82ca9d','#83a6ed']
    }
  }
  componentDidMount(){
    let orbit = []
    let orbitCount = {}
    let launchSites = []
    let launchLocationSite = []
    let tatolmass =0 
    let lanchTimeLine =  []
    axios.get('https://api.spacexdata.com/v3/launches')
    .then(res =>{
      res.data.forEach(data => {
        const nameOrbit = data.rocket.second_stage.payloads[0].orbit
        const payloadmassKg = data.rocket.second_stage.payloads[0].payload_mass_kg
        const launchSite = data.launch_site.site_name
        const lanchlocation  = data.launch_site.site_name_long
       
        let ran = Math.floor(Math.random()*10)
        // console.log(ran)
        lanchTimeLine.push({missionname:data.mission_name,lanchYear:data.launch_year,rocket:data.rocket.rocket_name,color:this.state.color[ran]})
        tatolmass += payloadmassKg
      
        if(orbit.indexOf(nameOrbit)===-1){
            orbit.push(nameOrbit)
            orbitCount[nameOrbit] = 0
        }
        // console.log(launchSite)
        if(launchSites.indexOf(launchSite)=== -1){
            launchSites.push(launchSite)
            launchLocationSite.push({name:launchSite,location:lanchlocation})
            // console.log("1")
        }
          // console.log(data.rocket.second_stage.payloads[0].orbit)
      });

      //  console.log(launchLocationSite)
       this.setState({orbit:orbit,launchLocationSite:launchLocationSite,payloadmassKg:tatolmass,lanchTimeLine:lanchTimeLine})
      //  console.log(orbitCount)
       res.data.forEach(data => {
        const nameOrbit = data.rocket.second_stage.payloads[0].orbit
        orbitCount[nameOrbit] =  orbitCount[nameOrbit] +1
          // console.log(data.rocket.second_stage.payloads[0].orbit)
      });
      let data = []
      // console.log(orbitCount)
      for(let i = 0 ;i <orbit.length;i++ ){
         
         if(Object.keys(orbitCount)[i] === orbit[i]){
          //  console.log(Object.keys(orbitCount)[i],orbit[i])
           data.push({name:orbit[i],uv:orbitCount[`${orbit[i]}`],fill:this.state.color[i]})
          //  console.log(orbitCount[`${orbit[i]}`])
         }
      }
      // console.log(data)
      this.setState({data:data,loder:true})
    })
  }
  render() {
    // console.log(this.state)
  const lanchlocation =  this.state.launchLocationSite.map((data,id)=>{
      return (
      <div className="localtion" key={id}>
        <div className="box">
          <article className="media">
                <div className="media-content">
                      <div className="content">
                          <h1 className="title is-6">{data.name}</h1>
                          <h2 className="subtitle is-6">{data.location}</h2>          
                      </div>
                </div>
          </article>
        </div>
      </div>
      );
    })
    return (
      <div className="bg-launch"> 
          {this.state.loder ? <div>
            <div className="title-launch" style={{textAlign:'center',marginTop:'0'}}>Launch Status</div>
           <div className="card-layout-chart">
              <div className="card-1-chart">
                    <div className="time-line-1" style={{marginLeft:"25%"}}>Orbit</div>
                    <BarChart data={this.state.data}/>
              </div>
              <div className="card-1-chart">
              <div className="time-line-1" style={{marginLeft:"25%"}}>Location Launch</div>
                    {lanchlocation}
              </div>
              <div className="card-1-chart">
                  <TotalMassPayload data={this.state.payloadmassKg}/>
              </div>
               <div className="card-1-chart">
               <div className="time-line" style={{marginLeft:"25%"}}>Launch Time Line</div>
                  {this.state.lanchTimeLine.map((data,id)=>{
                    return <LauchTimeLine name={data.lanchYear} color={data.color} detail={data.missionname} key={id}/>
                  })}
              </div>
                
          </div>
          </div> : <div style={{textAlign:'center',paddingTop:'20%'}}><Loader/></div> }
          
           
      </div>
    )
  }
}
