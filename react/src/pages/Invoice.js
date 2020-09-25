import React, { useState, ChangeEvent, useCallback } from 'react';
const { v4:uuid } = require('uuid');

import './Invoice.css';
import logoImage from '../assets/images/metaware_logo.png';
import Footer from '../components/Footer/Footer';
import Input from '../components/Input/Input';
import Select from '../components/Select/Select';




function Invoice(){
    let default_invoice ={
            
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
            }
         
          }
          
          const [logo, setLogo] = useState(logoImage)
          const [isShow,setIsShow]= useState(' ');
          const [print,setPrint] = useState(false);      
          const [product,setProduct] = useState([{ qty: 10, description: 'Gadget', cost: 9.95, id:uuid(),total:99.50}]);
          const [tax, setTax] = useState(13.00);
          const [currencySimbol,setCurrencySimbol] = useState('$')

          

        function handleReset(){
            
        }
        function handleAddObject(){
            
            setProduct([...product,{ qty: 0, description: '', cost: 0, id:uuid(),total:0}])
            
        }
        function handleCalculateTax(){


            return ((tax * handleCalculateSubTotal())/100).toFixed(2);
        }

        function handleUpdateTax(value){
            
            let tax = value
            if(value == ''){
                tax = 0
            }

            setTax(tax);
        }
        function handleCalculateGrandtotal(){
            let calculateGrandTotal = (parseFloat(handleCalculateSubTotal()) + parseFloat(tax));

            return calculateGrandTotal.toFixed(2);
        }

        function handleCalculateSubTotal(){

            let totalvalue = product.reduce((a,c)=> a + c.total ,0)
            
            return totalvalue.toFixed(2);
        }

        function handleUpdateObject(item,name,value){
            
            let found = product.findIndex(function(teste){return teste.id == item.id})
         
            let products = [...product]
            
                products[found][name] = value
                products[found].total = item.qty * item.cost

           
            setProduct(products)
        }


        function handleRemoveObject(item){


            let index = product.findIndex(function(objeto){return objeto.id == item.id})
            let products = [...product]
            products.splice(index,1)

            setProduct(products);
            
          
            
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
                <input type="file" id="imgInp"  />
                <img src={logo} id="company_logo"  alt="your image" width="300" style={{display: isShow ? 'block':'none'}}/>
                <div>
                    <div className="noPrint" style={{display: print ? 'none':''}}>
                        <a  href="#" type="file" onClick={handleEditLogo} > Edit Logo </a>
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
                
                    <Select name="currencySimbol"
                    label ="US Dollar ($)"
                    value ={currencySimbol}
                    onChange={e =>{setCurrencySimbol(e.target.value)}}
                    options={[
                        {value:'$', label:'US Dollar ($)'},
                        {value:'CAD $', label:'Canadian Dollar ($)'},
                        {value:'€', label:'Euro (€)'},
                        {value:'₹', label:'Indian Rupee (₹)'},
                        {value:'kr', label:'Norwegian krone (kr)'},
                        {value:'£', label:'British Pound (£)'}
                     ]}
                     style={{display: print ? 'none':''}}
                     className="ng-valid ng-touched ng-dirty ng-valid-parse"
                    />
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
            <div className="col-xs-2"> {'Cost ' + currencySimbol} </div>
            <div className="col-xs-2 text-right">Total</div>
        </div>



       
   
      
        
       {product.map((item) => [ 
        <div className="row invoice-item" key={item.id}>
        <div className="col-xs-1 " style={{display: print ? 'none':''}}>
              <a className="btn btn-danger" onClick={() => handleRemoveObject(item)} >[x]</a>
        </div>
        <div className="col-xs-1" style={{display: print? '':'none'}}></div>
        <div className="col-xs-5 input-container" >
            <Input size="" placeholder ="Description" value={item.description} onChange={(e)=>{handleUpdateObject(item,"description",e.target.value)}}  />        
        </div>
        <div className="col-xs-2 input-container" >
             <Input size="4" placeholder ="Quantity" value={item.qty} onChange={(e)=>{handleUpdateObject(item,"qty",e.target.value)}} />
            
        </div>
        <div className="col-xs-2 input-container" >
            <Input size="6" placeholder ="Cost" value={item.cost} onChange={(e)=>{handleUpdateObject(item,"cost",e.target.value)}} />
           
        </div>
        <div className="col-xs-2 text-right input-container">
          {currencySimbol + item.total}
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
            <div className="col-xs-2 text-right">{currencySimbol +handleCalculateSubTotal()}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Tax(%): <input  style={{width: '43px'}} defaultValue={tax} onChange={(e)=>{handleUpdateTax(e.target.value)}}/></div>
            <div className="col-xs-2 text-right">{currencySimbol+handleCalculateTax()}</div>
      </div>
      <div className="row">
        <div className="col-xs-10 text-right">Grand Total:</div>
            <div className="col-xs-2 text-right">{currencySimbol+handleCalculateGrandtotal()}</div>
      </div>
    </div>

    <div className="row noPrint actions">
      <a  className="btn btn-primary" onClick={handlePrintInfo} style={{display: print ? '':'none'}} >Print</a>
      <a  className="btn btn-primary" >Reset</a>
      <a  className="btn btn-primary" onClick={()=>{ print ? setPrint(false) : setPrint(true)}} style={{display: print ? 'none': ''}}>Turn On Print Mode</a>
      <a  className="btn btn-primary" onClick={()=>{ print ? setPrint(false) : setPrint(true)}} style={{display: print ? '':'none'}}>Turn Off Print Mode</a>
    </div>

        <Footer />

  </div>
  
        </>
    );


}

export default Invoice;