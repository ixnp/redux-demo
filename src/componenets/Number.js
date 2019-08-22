import React from 'react'
import {store} from '../App'

const Number = () => {

 const updateValue = (data) => {
     return{
         type: 'UPDATE_VALUE',
         payload: {
             value: data,
         }
     }
 }

 const sendVALUE = (ev) => {
     const value = updateValue(ev.target.value)
     store.dispatch(value)
 }


 
    return (
        <div>
        <div class="profile" id='profile'>{store.getState().value}</div> 
       <input type="number" name="number" min="0" onChange={sendVALUE}></input>
       </div>
    );
};
export default Number