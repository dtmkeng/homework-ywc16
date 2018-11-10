import React, { Component } from 'react'

export default class TotalMassPayload extends Component {
  render() {
    return (
      <div>
          {this.props.data ? 
          <div>
           <div className="time-line-1" style={{marginLeft:"20%"}}>Total Mass Payload</div> 
             <div className="status-mass">
                <div className="status-time-mass">
                    {this.props.data}&nbsp; Kg.
                </div>
            </div>
           </div>
         :''
         }
         
        </div>
    )
  }
}
