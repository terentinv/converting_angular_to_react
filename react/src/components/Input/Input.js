import React from 'react';



function Input({ size, placeholder, value, onChange }){


    return <input size={size} placeholder={placeholder}  defaultValue={value} onChange={onChange} />       
    
}

export default Input;