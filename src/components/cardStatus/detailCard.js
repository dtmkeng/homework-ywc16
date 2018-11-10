import React, { Component } from 'react'
import './cardStatus.css'
export default class DetailCard extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
            <div className="card">
                <div className="card-image">
                <figure className="image">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-6">John Smith</p>
                    <p className="subtitle is-7">@johnsmith</p>
                </div>
                </div>

                <div className="content detail-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                <br/>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
