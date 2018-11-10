import React, { Component } from 'react'

export default class Status extends Component {
  render() {
    let color = (this.props.status==null)?'hero is-warning':this.props.status===true?'hero is-sucess':'hero is-danger'
    return (
      <div>
        <section className={color}>
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
               {(this.props.status==null)?'Status Not defind':this.props.status===true?'Sucess':'Fail'}
            </h1>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
