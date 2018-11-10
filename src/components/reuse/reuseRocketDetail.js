import React, { Component } from 'react'

export default class ReuseRocketDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        { (this.props.data.img || this.prop.data.detail || this.props.data.name || this.props.data.year) ? <div>
          <div className="box item-reuse">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.props.data.img} alt="cover"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.props.data.name}&nbsp;:&nbsp;{this.props.data.rocketname}</strong> <small>(year&nbsp;{this.props.data.year})</small>
                    <br/>
                    {(this.props.data.detail !==null)? this.props.data.detail: 'Launch site : '+this.props.data.launchsite}
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
