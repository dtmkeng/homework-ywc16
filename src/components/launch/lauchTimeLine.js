import React, { Component } from 'react'

export default class LauchTimeLine extends Component {
 
  render() {
    return (
    <div className="localtion">
        <div className="box"  style={{backgroundColor:this.props.color}}>
          <article className="media">
                <div className="media-content">
                      <div className="content">
                          <h1 className="title is-6">{this.props.name}</h1>
                          <h2 className="subtitle is-6">{this.props.detail}</h2>          
                      </div>
                </div>
          </article>
        </div>
    </div>
    )
  }
}
