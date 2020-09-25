import React from 'react';
import Select from '../Select/Select';


function Infos({customer,company,value,onChange,selectStyle}){

    return(

        <div className="row infos">
            <div className="col-xs-6">
                <div className="input-container"><input type="text" readOnly value={customer.name}></input></div>
                <div className="input-container"><input type="text" readOnly value={customer.web_link}></input></div>
                <div className="input-container"><input type="text" readOnly value={customer.address1}></input></div>
                <div className="input-container"><input type="text" readOnly value={customer.address2}></input></div>
                <div className="input-container"><input type="text" readOnly value={customer.postal}></input></div>
                <div className="input-container">
                
                    <Select name="currencySimbol"
                    label ="Indian Rupee (₹)"
                    value ={value}
                    onChange={onChange}
                    options={[
                        {value:'$', label:'US Dollar ($)'},
                        {value:'CAD $', label:'Canadian Dollar ($)'},
                        {value:'€', label:'Euro (€)'},
                        {value:'₹', label:'Indian Rupee (₹)'},
                        {value:'kr', label:'Norwegian krone (kr)'},
                        {value:'£', label:'British Pound (£)'}
                     ]}
                     style={selectStyle}
                     className="ng-valid ng-touched ng-dirty ng-valid-parse"
                    />
                </div>
            </div>
            <div className="col-xs-6 right">
            <div className="input-container"><input type="text" readOnly value={company.name}/></div>
        <div className="input-container"><input type="text" readOnly value={company.web_link}/></div>
        <div className="input-container"><input type="text" readOnly value={company.address1}/></div>
        <div className="input-container"><input type="text" readOnly value={company.address2}/></div>
        <div className="input-container"><input type="text" readOnly value={company.postal}/></div>
            </div>
        </div>
    );

}

export default Infos;