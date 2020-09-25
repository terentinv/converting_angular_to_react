import React from 'react';
import InvoiceNumber from '../InvoiceNumber/InvoiceNumber';


function Header({value,styleImg,stylePrint, editLogo,toggleLogo,src, isShow}){

    return(
        <>
        <div className="row">
                <div className="col-xs-12 heading">
                    INVOICE
                </div>
            </div>
        <div className="row branding">
        <InvoiceNumber value={value} />
         <div className="col-xs-6 logo-container">
             <input type="file" id="imgInp"  />
             <img src={src} id="company_logo"  alt="your image" width="300" style={styleImg} />
             <div>
                 <div className="noPrint" style={stylePrint} >
                     <a  href="#" type="file" onClick={editLogo} > Edit Logo </a>
                     <a id="remove_logo" href="#" onClick={toggleLogo} >{isShow ? 'Hide':'Show'} logo</a>
                 </div>
             </div>
         </div>
     </div>
     </>
    );
}

export default Header;