import React, { Component } from 'react'
import * as  Recharts from 'recharts';
// import './chart.css'
const {RadialBarChart, RadialBar, Legend} = Recharts;

  const style = {
  	top: 0,
  	left: 350,
  	lineHeight: '24px'
  };
export default class BarChart extends Component {
  render() {
    return (
        <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={this.props.data}>
        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
    //   </div>
    )
  }
}
