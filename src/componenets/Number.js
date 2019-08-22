import React from 'react'

const Number = (props) => {
 
    return (
        <div>
        <div class="profile" id='profile'>{props.value}</div> 
       <input type="number" name="number" min="0" onChange={props.handleChange}></input>
       </div>
    );
};
export default Number