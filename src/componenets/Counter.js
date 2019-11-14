import React from 'react'
import {store} from '../App'

const Counter = (props) => {

    let decrement = () => {
        store.dispatch({type: 'DECREASE'})
    }
    let increment = () => {
        store.dispatch({type: 'INCREASE'})
    }

    return (
        <div>
        <div class="counter" id='counter'>{store.getState().count}</div> 
        <button onClick = {increment}> Add  </button> 
        <button onClick = {decrement}> Minus  </button> 
       </div>
    );
};
export default Counter