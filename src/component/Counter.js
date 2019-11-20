import React from 'react'
import {store} from '../App'

const Counter = () => {
    const increment = () => {
        store.dispatch({type:'INCREASE', payload:1})
    }
    const decrement = () => {
        store.dispatch({type:'DECREASE', payload:1})
    }
    return(
        <div>
            <div class='counter' id='counter'>{store.getState().count} </div>
            <button onClick = {increment}> Add</button>
            <button onClick = {decrement}> Minus</button>
        </div>
    )
}
export default Counter