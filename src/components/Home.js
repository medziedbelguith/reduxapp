import React, { Component } from 'react'
import About from './About'
export default class Home extends Component {
    constructor(props)
    {
        super(props)
    }
  render() {
    return (
      <div>
      <h1>Home page:this is from Home component x {this.props.x}</h1>
      <About x={this.props.x}/>
      </div>
    )
  }
}

