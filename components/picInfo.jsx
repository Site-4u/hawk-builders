import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

// Input - "name, desc, image"
function aboutUs(props){
    return(
        <div id="r-about-us-page-container">
            <div class="container">
                <div class="image">
                    <Fade triggerOnce keyframes={right} delay="20">
                        <img src={props.image}></img>
                    </Fade>
                </div>
                <div class="info">
                    <Fade triggerOnce keyframes={left} delay="20">
                        <h2>
                            {props.name}
                        </h2>
                    </Fade>
                    <Fade triggerOnce keyframes={left} delay="0">
                        <p>
                            {props.desc}
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default aboutUs