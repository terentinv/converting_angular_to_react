import React from 'react';

function Items(props){


    return(
    <>
       
        <div className="col-xs-5 input-container" >
            <input placeholder="Description"  defaultValue={props.description} onChange={e => {setItems(e.target.value)}}/>
        </div>
        <div className="col-xs-2 input-container" >
            <input  size="4" placeholder="Quantity"  defaultValue={props.qty}  onChange={e => {setItems(e.target.value)}}></input>
        </div>
        <div className="col-xs-2 input-container" >
            <input  size="6" placeholder="Cost" defaultValue={props.cost}  onChange={e => {setItems(e.target.value)}}></input>
        </div>

        </>
    );


}

export default Items;