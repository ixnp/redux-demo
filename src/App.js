import React from 'react';
import './App.css';
import Counter from './componenets/Counter'
import Number from './componenets/Number'


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0,
      value:1
    }
  }

  increment = () => {
    if(this.state.count >= 0){
      this.setState({count:this.state.count+this.state.value})
    }
  }  

  decrement = () => {
    if(this.state.count >= 0 &&  this.state.count-this.state.value > 0){
      this.setState({count:this.state.count-this.state.value}) 
    } 
   
  }
  handleChange = (ev) => {
    let value = ev.target.value
    value = parseInt(value)
    if(value>0){
      this.setState({value:value})
    }
  }

  render(){
  return (
    <div class="container">
      <Number handleChange={this.handleChange} value={this.state.value}/>
      <Counter count={this.state.count} increment={this.increment} decrement={this.decrement} />
    </div>
    );
  } 
}

