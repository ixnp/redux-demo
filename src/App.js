import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './componenets/Counter'
import Number from './componenets/Number'
import { createStore } from 'redux'

const initalState = {
  count: 0,
  value:1
}
const reducer = (state = initalState,action) => {
 
  switch(action.type){
    case 'INCREASE':
      if(state.count >= 0 ){
        console.log(state.count,state.value)
        return {...state, count: state.count+state.value}
      }
      return state;
   
    case 'DECREASE':
        case 'INCREASE':
            if(state.count > 0 ){
              return {...state, count: state.count-state.value}
            }
            return state;
    case 'UPDATE_VALUE':
          let num = parseInt(action.payload.value)
      return{...state, value: num}
    default:
      return state;
  }
}

//our store requires something
//to return a state
//thats the reducer
export const store = createStore(reducer)

export class App extends React.Component {

componentDidMount(){
  store.subscribe(() => {
    this.forceUpdate()
  })
}

  render(){
  return (
    <div class="container">
      <Number />
      <Counter />
    </div>
    );
  } 
}
