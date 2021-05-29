import React from 'react';
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up} from '../styles/anim.js';



function houseImage(props){
    return(
        <Fade triggerOnce keyframes={up} delay={props.id * 100}>
            <div class="houseImage">
                <img src={props.link} />
            </div>
        </Fade>
    );
}

export default houseImage;