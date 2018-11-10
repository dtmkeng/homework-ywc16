import React, { Component } from 'react'

export default class RocketDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        { (this.props.img || this.props.detail || this.props.name || this.props.year) ? <div>
          <div className="box item-reuse">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.img} alt="cover"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.name}&nbsp;:&nbsp;{this.props.rocketname}</strong> <small>(year&nbsp;{this.props.year})</small>
                    <br/>
                    {(this.props.detail !==null)? this.props.detail: 'Launch site : '+this.props.launchsite}
                  </p>
                </div>
              </div>
            </article>
          </div>
      </div> :'' }
      </div>
      
    )
  }
}
