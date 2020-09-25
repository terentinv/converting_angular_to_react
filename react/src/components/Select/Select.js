import React from 'react';



function Select({label, name,options, ...rest}){

    return(
        <select value="" id={name} {...rest}>
            <option value= "" disabled hidden>$</option>
                {options.map(option=>{
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
        </select>
    );



}

export default Select;