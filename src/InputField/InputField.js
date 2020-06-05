import React from 'react';

const InputField = (props) =>{
    return(
        <div className = "InputField">
          <input 
          type="text" 
          onChange = {props.changed} 
          value = {props.value}/>
          <p>{props.value.length}</p>


        </div>
    );
};

export default InputField;