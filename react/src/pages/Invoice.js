import React, { useState } from 'react';


import './Invoice.css';
import logoImage from '../assets/images/metaware_logo.png';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';




function Invoice(){
    let default_invoice ={
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
         
          }
          
          const [isShow,setIsShow]= useState(' ')
          const [print,noPrint] = useState(false)
          
          const [items,setItems] = useState([{ qty: 10, description: 'Gadget', cost: 9.95}]);
          
        function handleAddObject(){

            setItems([...items,{ qty: 10, description: 'Gadget', cost: 9.95}])

        }

        function handleRemoveObject(){

            var item =[...items];
            item = item.splice(1,5);

            setItems([{items:item}])
        }

        function handleEditLogo(){
            document.getElementById('imgInp').click()
        }

        function handlePrintInfo(){
            window.print();
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
                <img src={logoImage} id="company_logo"  alt="your image" width="300" style={{display: isShow ? 'block':'none'}}/>
                <div>
                    <div className="noPrint" style={{display: print ? 'none':''}}>
                        <a  href="#" type="file" onClick={handleEditLogo}> Edit Logo </a>
                        <a id="remove_logo" href="#" onClick={()=>{ isShow ? setIsShow(false) : setIsShow(true)}} >{isShow ? 'Hide':'Show'} logo</a>
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
                    <select style={{display: print ? 'none':''}}></select>
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

    

   
      
        
       {items.map((item) => [ 
        <div className="row invoice-item" key={item}>
        <div className="col-xs-1 " style={{display: print ? 'none':''}}>
              <a className="btn btn-danger" onClick={handleRemoveObject} >[x]</a>
        </div>
         <Items description= {item.description} qty={item.qty} cost={item.cost} />

         <div className="col-xs-2 text-right input-container">
          {/*item.cost * item.qty | currency:*/}
        </div>
        </div>
                ])}
            
            

       
        <div className="row invoice-item">
        <div className="col-xs-12 add-item-container" style={{display: print ? 'none':''}}>
          <a className="btn btn-primary" onClick={handleAddObject} >[+]</a>
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
      <a href="#" className="btn btn-primary" onClick={handlePrintInfo} style={{display: print ? '':'none'}} >Print</a>
      <a href="#" className="btn btn-primary" >Reset</a>
      <a href="#" className="btn btn-primary" onClick={()=>{ print ? noPrint(false) : noPrint(true)}} style={{display: print ? 'none': ''}}>Turn On Print Mode</a>
      <a href="#" className="btn btn-primary" onClick={()=>{ print ? noPrint(false) : noPrint(true)}} style={{display: print ? '':'none'}}>Turn Off Print Mode</a>
    </div>

        <Footer />

  </div>
  
        </>
    );


}

export default Invoice;