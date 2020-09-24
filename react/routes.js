import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Invoice from './src/pages/Invoice.js';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Invoice} />
        </BrowserRouter>
    );
}

export default Routes;