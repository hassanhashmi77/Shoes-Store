import React from 'react';
import Home from './home.js';
import About from './about.js';
import Manu from './manuBar.js';
import MediaCard from './product.js';
import ProductList from './productItems.js';

import {
    BrowserRouter as Router,
    Route,


} from "react-router-dom";


function Navbar() {

    return (
        <div >
            <Router>
                <Manu />
                <switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/about" component={About} />

                    <Route exact path="/product" component={MediaCard} />
                    <Route exact path="/product/:id" component={ProductList} />


                </switch>
            </Router>
        </div>
    );
}

export default Navbar;