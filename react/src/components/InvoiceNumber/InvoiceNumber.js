import React from 'react';

function InvoiceNumber({value}){
    
    return(<div className="col-xs-6">
    <div className="invoice-number-container">
        <label htmlFor="invoice-number">Invoice</label>
        <input type="text" id="invoice-number" value={'# '+ value}/>
    </div>
</div>
);
}

export default InvoiceNumber;