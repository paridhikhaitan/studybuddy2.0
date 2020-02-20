import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main'

function display(){
    return(
        <BrowserRouter>
        <Main />
        </BrowserRouter>
    );
}

export default display;