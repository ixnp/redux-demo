import React from 'react'
import './App.css';
import Counter from './component/Counter'
import { createStore } from 'redux'


const initialState = {
    count:0,
    message:''
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case 'INCREASE':
      
      return {...state, count: state.count+1, message: action.payload}
    case 'DECREASE':
          return {...state, count: state.count-1, message: action.payload}
      
        default:
          return state
  }

}
export const store = createStore(reducer)

export class App extends React.Component {

  render(){

    store.subscribe(()=>{
      this.forceUpdate()
    })
    
  return(
    <div class="container">
      <Counter />
    </div>
  )
  }
}