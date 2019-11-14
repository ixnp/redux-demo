import React from 'react';
import './App.css';
import Counter from './componenets/Counter'
import Number from './componenets/Number'
import { createStore } from 'redux'

const initalState={
  count:0,
  value:1
}

const reducer = (state=initalState, action) => {

  switch (action.type) {
    case 'INCREASE':
      return{...state, count:state.count+1}
    case 'DECREASE':
    return{...state, count:state.count-1}
      default:
      return state;
  }
}
export const store = createStore(reducer)
 console.log(store.getState)


export class App extends React.Component {
  componentDidMount(){
    store.subscribe(()=>{
      this.forceUpdate()
    })
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
      <Number handleChange={this.handleChange} />
      <Counter  />
    </div>
    );
  } 
}

