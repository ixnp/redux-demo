import React from 'react'

const Counter = (props) => {

    return (
        <div>
        <div class="counter" id='counter'>{props.count}</div> 
        <button onClick = {props.increment}> Add  </button> 
        <button onClick = {props.decrement}> Minus  </button> 
       </div>
    );
};
export default Counter