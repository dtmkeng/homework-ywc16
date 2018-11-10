import React, { Component } from 'react'
export default class ReuseCard extends Component {
  render() {
    return (
      <div>
            <div className="card">
                <div className="content">
                    <div className="card-bg">
                       <div className="title-card">
                            <div className="header-img">
                                <img src={require('../rocket.png')} alt="logo" className="img-logo"/>
                                <div className="status-title">REUSE</div>
                            </div>
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
    )
  }
}
