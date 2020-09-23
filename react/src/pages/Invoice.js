import React from 'react';

import './Invoice.css';
import logoImage from '../assets/images/metaware_logo.png';


function Invoice(){
    const default_invoice ={
            tax: 13.00,
            invoice_number: 10,
            customer_info: {
              name: 'Mr. John Doe',
              web_link: 'John Doe Designs Inc.',
              address1: '1 Infinite Loop',
              address2: 'Cupertino, California, US',
              postal: '90210'
            },
            company_info: {
              name: 'Metaware Labs',
              web_link: 'www.metawarelabs.com',
              address1: '123 Yonge Street',
              address2: 'Toronto, ON, Canada',
              postal: 'M5S 1B6'
            },
            items:
              { qty: 10, description: 'Gadget', cost: 9.95 }
          }
    
    
    return (
        <>
    {/*header*/}
        <div className="container" width="800px" id="invoice">
            <div className="row">
                <div className="col-xs-12 heading">
                    INVOICE
                </div>
            </div>
        

        <div className="row branding">
            <div className="col-xs-6">
                <div className="invoice-number-container">
                    <label htmlFor="invoice-number">Invoice</label>
                    <input type="text" id="invoice-number" value=  {' # ' + default_invoice.invoice_number}/>
                </div>
            </div>
            <div className="col-xs-6 logo-container">
                <input type="file" id="imgInp" />
                <img src={logoImage} id="company_logo"  alt="your image" width="300" /*style={{display: logoRemoved ? 'block':'none'}}*//>
                <div>
                    <div className="noPrint">
                        <a  href="#"> Edit Logo </a>
                        <a id="remove_logo" href="#" > logo</a>
                    </div>
                </div>
            </div>
        </div>
{/*fim do header*/}

        <div className="row infos">
            <div className="col-xs-6">
                <div className="input-container"><input type="text" readOnly value={default_invoice.customer_info.name}></input></div>
                <div className="input-container"><input type="text" readOnly value={default_invoice.customer_info.web_link}></input></div>
                <div className="input-container"><input type="text" readOnly value={default_invoice.customer_info.address1}></input></div>
                <div className="input-container"><input type="text" readOnly value={default_invoice.customer_info.address2}></input></div>
                <div className="input-container"><input type="text" readOnly value={default_invoice.customer_info.postal}></input></div>
                <div className="input-container">
                    <select></select>
                </div>
            </div>
            <div className="col-xs-6 right">
            <div className="input-container"><input type="text" readOnly value={default_invoice.company_info.name}/></div>
        <div className="input-container"><input type="text" readOnly value={default_invoice.company_info.web_link}/></div>
        <div className="input-container"><input type="text" readOnly value={default_invoice.company_info.address1}/></div>
        <div className="input-container"><input type="text" readOnly value={default_invoice.company_info.address2}/></div>
        <div className="input-container"><input type="text" readOnly value={default_invoice.company_info.postal}/></div>
            </div>
        </div>
        <div className="items-table">
            <div className="row header">
            <div className="col-xs-1">{' '}</div>
            <div className="col-xs-5">Description</div>
            <div className="col-xs-2">Quantity</div>
            <div className="col-xs-2">Cost </div>
            <div className="col-xs-2 text-right">Total</div>
        </div>

    

    <div className="row invoice-item">
        <div className="col-xs-1 remove-item-container">
            <a className="btn btn-danger" >[x]</a>
        </div>
        <div className="col-xs-5 input-container">
            <input placeholder="Description" value={default_invoice.items.description}/>
        </div>
        <div className="col-xs-2 input-container">
            <input  size="4" placeholder="Quantity" value={default_invoice.items.qty} ></input>
        </div> 
        <div className="col-xs-2 input-container">
            <input  size="6" placeholder="Cost" value={default_invoice.items.cost}></input>
        </div>
        <div className="col-xs-2 text-right input-container">
          {/*item.cost * item.qty | currency:*/}
        </div>
        </div>
        <div className="row invoice-item">
        <div className="col-xs-12 add-item-container">
          <a className="btn btn-primary"  >[+]</a>
        </div>
        </div>
      
      <div className="row">
        <div className="col-xs-10 text-right">Sub Total</div>
        <div className="col-xs-2 text-right"></div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Tax(%): <input  style={{width: '43px'}} value={default_invoice.tax}/></div>
        <div className="col-xs-2 text-right"></div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Grand Total:</div>
        <div className="col-xs-2 text-right"></div>
      </div>
    </div>

    <div className="row noPrint actions">
      <a href="#" className="btn btn-primary" >Print</a>
      <a href="#" className="btn btn-primary" >Reset</a>
      <a href="#" className="btn btn-primary" >Turn On Print Mode</a>
      <a href="#" className="btn btn-primary" >Turn Off Print Mode</a>
    </div>

  </div>
  <div  className="copy noPrint">
    <a href="https://jasdeep.ca/?utm_source=angular_invoicing">Jasdeep Singh</a> {' '+'&'+' '} 
    <a href="https://github.com/manpreetrules">Manpreet Singh</a>{' '}
    Made with
    <span className="love">{' '}&#9829;</span> in Toronto by{' '}
    <a href="https://metawarelabs.com/?utm_source=angular_invoicing">Metaware Labs Inc.</a>
  </div>

        </>
    );


}

export default Invoice;