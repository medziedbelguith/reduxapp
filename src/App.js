import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { connect } from 'react-redux';
import Test from './components/Test';
class App extends Component {
  
  render(){
    return (
      <div>
      <h1>this is x from app component:{this.props.x}</h1>
      <h1>My name is {this.props.name}</h1>
      <h1>My lastname is {this.props.lastname}</h1>
       <button onClick={this.props.increment}>+</button>
       <button onClick={this.props.decrement}>-</button>
       <Home/>
       <About/>
       <Contact/>
       <Test/>
      </div>
    );
  }
 
}
function mapStateToProps(state){
  return{
    x:state.x,
    name:state.firstname,
    lastname:state.lastname
  }
}
function mapDispatchToProps(dispatch){
  return{
    increment:()=>dispatch({type:"INCREMENT"}),
    decrement:()=>dispatch({type:"DECREMENT"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
