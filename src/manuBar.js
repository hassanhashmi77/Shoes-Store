import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import MenuIcon from '@material-ui/icons/Menu';
import {
    Link
} from "react-router-dom";
function Manu() {

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);

    });



    return (
        <div className="cont">
            <nav id="aabn">
                <div class="nav-wrapper">
                    Shoes Store
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                        <div className='abc'><MenuIcon fontSize="large" /></div>

                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
            </ul>


        </div>
    );
}

export default Manu;


