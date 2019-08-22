import React from 'react'
import {store} from '../App'

const Counter = (props) => {

//Actions dispatch      
const decrement = () => {
        store.dispatch({type:'DECREASE'})
    }
 const increment = () =>{
    store.dispatch({type:'INCREASE'})

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