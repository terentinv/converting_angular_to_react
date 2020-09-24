import React from 'react';

import './Footer.css'

function Footer(){

    return(
        <div  className="copy noPrint">
    <a href="https://jasdeep.ca/?utm_source=angular_invoicing">Jasdeep Singh</a> {' '+'&'+' '} 
    <a href="https://github.com/manpreetrules">Manpreet Singh</a>{' '}
    Made with
    <span className="love">{' '}&#9829;</span> in Toronto by{' '}
    <a href="https://metawarelabs.com/?utm_source=angular_invoicing">Metaware Labs Inc.</a>
  </div>

    );
}

export default Footer;