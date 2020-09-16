import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function Slider() {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems);
    });
    return (

        <div class="slider" >
            <ul class="slides" id="abbb">

                <li>
                    <img src="/images/p5.jpg" alt="description " />
                    <div class="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="/images/p4.jpg" alt="description " />
                    <div class="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="/images/p3.jpg" alt="description " />
                    <div class="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>

            </ul>

        </div >
    );
}

export default Slider;
