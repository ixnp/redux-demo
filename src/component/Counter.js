import React from 'react'
import {store} from '../App'

const Counter = () => {
    const increment = () => {
        store.dispatch({type:'INCREASE', payload:'Pluse one!!!'})
    }
    const decrement = () => {
        store.dispatch({type:'DECREASE', payload:'Minus one :((('})
    }
    return(
        <div>
            <div>{store.getState().message}</div>
            <div class='counter' id='counter'>{store.getState().count} </div>
            <button onClick = {increment}> Add</button>
            <button onClick = {decrement}> Minus</button>
        </div>
    )
}

export default Counter
