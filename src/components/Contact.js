import React, { Component } from 'react'
import { connect } from 'react-redux';
 class Contact extends Component {
    constructor(props)
    {
        super(props)
    }
  render() {
    return (
        <div>
        <h1>this is x from contact component:{this.props.x}</h1>
        <h1>My name is {this.props.name}</h1>
         <button onClick={this.props.increment}>+</button>
         <button onClick={this.props.decrement}>-</button>
        </div>

    )
  }

  
}
function mapStateToProps(state){
    return{
      x:state.x,
      name:state.firstname
    }
  }
  function mapDispatchToProps(dispatch){
    return{
      increment:()=>dispatch({type:"INCREMENT"}),
      decrement:()=>dispatch({type:"DECREMENT"}),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Contact);