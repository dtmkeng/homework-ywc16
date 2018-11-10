import React, { Component } from 'react'

export default class LaunchCard extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
            <div className="card">
                <div className="content">
                    <div className="card-bg">
                        <div className="title-card">
                            <div className="header-img-1">
                                <img src={require('../rocket.png')} alt="logo" className="img-logo-2"/>
                                <div className="status-title">Launch</div>
                            </div>
                            <div className="status">
                                <div className="status-time">
                                    {this.props.count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
