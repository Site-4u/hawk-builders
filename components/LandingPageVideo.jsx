import React from "react";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
//Input - "url, name, desc"

function lPage(props){
    const videoURL = "https://www.youtube.com/embed/"+props.url+"?autoplay=1&mute=1&loop=1&controls=0&playlist="+props.url;

    return(
        <div id="landing-page-container">
            <div id="video-container">
                <iframe src={videoURL} autoplay frameborder="0" allowFullScreen> </iframe>
            
            <div id="video-overlay-container">
                <Fade triggerOnce keyframes={up} delay="90">
                    <h1 id="heading">
                        {props.name}
                    </h1> 
                </Fade>
                <Fade triggerOnce keyframes={up} delay="120">
                    <h6 class="desc">
                        {props.desc}
                    </h6>
                </Fade>
            </div>


            </div>
            
        </div>
        
    );
}
export default lPage