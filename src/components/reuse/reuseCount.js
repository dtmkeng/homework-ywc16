import React, { Component } from 'react'

export default class ReuseCount extends Component {
  render() {
    return (
    <div>
        {this.props.data ? 
        <div>
         <div className="time-reuse-1" style={{textAlign:'center'}}>{this.props.name}</div> 
           <div className="status-reuse">
              <div className="status-time-reuse">
                  {this.props.data}&nbsp;/&nbsp;{this.props.time}
              </div>
          </div>
         </div>
       :''
       }
      </div>
    )
  }
}
