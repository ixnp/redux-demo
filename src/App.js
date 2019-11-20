import React from 'react'
import Counter from './component/Counter'
import { createStore } from 'redux'

const initalState = {
    count:0
}

const reducer = (state=initalState, action) => {
  switch(action.type){
    case 'INCREASE':
      console.log('state: ', state.count+action.payload)
      return {...state, count: state.count+action.payload}
    case 'DECREASE':
      console.log('state: ', state.count-action.payload)
          return {...state, count: state.count-action.payload}
      
        default:
          return state
  }

}

export const store = createStore(reducer)

export class App extends React.Component {

  componentDidMount(){
    store.subscribe(()=>{
      this.forceUpdate()
    })
  }

  render(){
  return(
    <div class="container">
      <Counter />
    </div>
  )
  }
}