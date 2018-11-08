import React, { Component } from 'react'

export default class SucessCard extends Component {
  render() {
    return (
      <div>
            <div className="card">
                <div className="content">
                    <div className="card-bg">
                        <div className="title-card">
                            <div className="header-img-1">
                                <img src={require('./rocket.png')} alt="logo" className="img-logo-2"/>
                                <div className="status-title">Launch Success</div>
                            </div>
                            <div className="status">
                                <div className="status-time">
                                    10 
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
