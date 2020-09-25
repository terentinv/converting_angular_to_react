import React, { useState, ChangeEvent, useCallback } from 'react';
const { v4:uuid } = require('uuid');

import './Invoice.css';
import logoImage from '../assets/images/metaware_logo.png';
import Footer from '../components/Footer/Footer';
import Table from '../components/Table/Table';
import Header from '../components/Header/Header';
import Infos from '../components/Infos/Infos';




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
          const [tax, setTax] = useState(13);
          const [discount, setDiscount] = useState(10);
          const [currencySimbol,setCurrencySimbol] = useState('₹')

         
        function handleUpdateDiscount(value){
            let discount = value
            if(discount == ''){
                discount = 0
            }
            setDiscount(discount);
        } 
        function handleCalculateDiscount(){
            return ((discount * handleCalculateSubTotal())/100).toFixed(2);
        }
        function handleReset(){
            let r = confirm('Are you sure you would like to clear the invoice?')
            if(r){
                let products = [...product]
                products.splice(1,products.length)
                
                setProduct(products) 
                setCurrencySimbol('₹')
                setTax(13.00)
                setDiscount(10)
            }
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
            let calculateGrandTotal;
            if(parseFloat(handleCalculateSubTotal()+ parseFloat(tax))< discount){

                calculateGrandTotal = 0
            }else{
                calculateGrandTotal = (parseFloat(handleCalculateSubTotal()) + parseFloat(tax))-parseFloat(discount);
            }
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
        
  
        <div className="container" width="800px" id="invoice">

        <Header value={default_invoice.invoice_number} 
        styleImg={{display: isShow ? 'block':'none'}} 
        stylePrint={{display: print ? 'none':''}} 
        editLogo={handleEditLogo} 
        toggleLogo={()=>{ isShow ? setIsShow(false) : setIsShow(true)}} 
        src={logo}  
        isShow={isShow}
        />

        <Infos customer={default_invoice.customer_info} 
        company={default_invoice.company_info} 
        value={currencySimbol} 
        onChange={e =>{setCurrencySimbol(e.target.value)}}
        selectStyle={{display: print ? 'none':''}}
        />
        
        <Table 
        currencySimbol ={currencySimbol} 
        product= {product}
        removeProductStyle={{display: print ? 'none':''}} 
        removeProduct= { handleRemoveObject}
        printModeOff ={{display: print? '':'none'}}
        addProduct ={handleAddObject}
        addProductStyle={{display: print ? 'none':''}}
        inputOnChange={handleUpdateObject}
        subTotal ={handleCalculateSubTotal()}
        updateDiscount ={(e) =>{handleUpdateDiscount(e.target.value)}}
        discount ={discount}
        calculateDiscount ={handleCalculateDiscount()}
        updateTax={(e)=>{handleUpdateTax(e.target.value)}}
        tax = {tax}
        calculateTax= {handleCalculateTax()}
        grandTotal={handleCalculateGrandtotal()}
        />
       

    <div className="row noPrint actions">
      <a  className="btn btn-primary" onClick={handlePrintInfo} style={{display: print ? '':'none'}} >Print</a>
      <a  className="btn btn-primary" style={{display: print ? 'none':''}} onClick={handleReset} >Reset</a>
      <a  className="btn btn-primary" onClick={()=>{ print ? setPrint(false) : setPrint(true)}} style={{display: print ? 'none': ''}}>Turn On Print Mode</a>
      <a  className="btn btn-primary" onClick={()=>{ print ? setPrint(false) : setPrint(true)}} style={{display: print ? '':'none'}}>Turn Off Print Mode</a>
    </div>

        <Footer />

  </div>
  
        
    );


}

export default Invoice;