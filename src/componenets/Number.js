import React from 'react'

const Number = (props) => {
 
    return (
        <div>
        <h4>Count By: </h4>
        <div class="profile" id='profile'></div> 
       <input type="number" name="number" min="0" onChange={props.handleChange}></input>
       </div>
    );
};
export default Number