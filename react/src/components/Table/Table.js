import React from 'react';
import Input from '../Input/Input';


function Table({
    currencySimbol, 
    product, 
    removeProductStyle,
    printModeOff ,
    removeProduct, 
    addProduct, 
    addProductStyle,
    inputOnChange,
    subTotal,
    updateTax,
    updateDiscount,
    discount,
    calculateDiscount,
    calculateTax,
    tax,
    grandTotal }){
    return(
        <div className="items-table">
        <div className="row header">
        <div className="col-xs-1">{' '}</div>
        <div className="col-xs-5">Description</div>
        <div className="col-xs-2">Quantity</div>
        <div className="col-xs-2"> {'Cost ' + currencySimbol} </div>
        <div className="col-xs-2 text-right">Total</div>
    </div>



   

  
    
   {product.map((item) => [ 
    <div className="row invoice-item" key={item.id}>
    <div className="col-xs-1 " style={removeProductStyle}>
          <a className="btn btn-danger" onClick={()=>removeProduct(item)} >[x]</a>
    </div>
    <div className="col-xs-1" style={printModeOff}></div>
    <div className="col-xs-5 input-container" >
        <Input size="" placeholder ="Description" value={item.description} onChange={(e) => inputOnChange(item,'description',e.target.value)}  />        
    </div>
    <div className="col-xs-2 input-container" >
         <Input size="4" placeholder ="Quantity" value={item.qty} onChange={(e) => inputOnChange(item,'qty',e.target.value)} />
        
    </div>
    <div className="col-xs-2 input-container" >
        <Input size="6" placeholder ="Cost" value={item.cost} onChange={(e)=> inputOnChange(item,'cost',e.target.value)} />
       
    </div>
    <div className="col-xs-2 text-right input-container">
      {currencySimbol + item.total}
    </div>
    </div>
            ])}
        
        

   
    <div className="row invoice-item">
    <div className="col-xs-12 add-item-container" style={addProductStyle}>
      <a className="btn btn-primary" onClick={addProduct} >[+]</a>
    </div>
    </div>
  
  <div className="row">
    <div className="col-xs-10 text-right">Sub Total</div>
        <div className="col-xs-2 text-right">{currencySimbol +subTotal}</div>
  </div>
  <div className="row">
    <div className="col-xs-10 text-right">Tax(%): <input  style={{width: '43px'}} defaultValue={tax} onChange={updateTax}/></div>
        <div className="col-xs-2 text-right">{currencySimbol+calculateTax}</div>
  </div>
  <div className="row">
    <div className="col-xs-10 text-right">Discount(%): <input  style={{width: '43px'}} defaultValue={discount} onChange={updateDiscount}/></div>
        <div className="col-xs-2 text-right">{currencySimbol+calculateDiscount}</div>
  </div>
  
  <div className="row">
    <div className="col-xs-10 text-right">Grand Total:</div>
        <div className="col-xs-2 text-right">{currencySimbol+grandTotal}</div>
  </div>
</div>
    );


}

export default Table;