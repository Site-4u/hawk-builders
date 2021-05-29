import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

function card(props){
    var desc = props.desc;
    return(
        <div id="card-container">
            <Fade triggerOnce keyframes={up} delay={props.id * 100}>
            <div class="container">
                <div class="img">
                    <img src={props.img} />
                </div>
                <div class="info">
                    <h3 class="name">{props.name}</h3>
                    <hr />
                    <p class="desc">{desc}</p>
                    <p class="price">{props.price}</p>
                    {/* <button class="btn">Learn More</button> */}
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default card