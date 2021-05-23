import React from "react";

//Input - "url, name, desc"

function lPage(props){
    const videoURL = "https://www.youtube.com/embed/"+props.url+"?autoplay=1&mute=1&loop=1&controls=0&playlist="+props.url;

    return(
        <div id="landing-page-container">
            <div id="video-container">
                <iframe src={videoURL} autoplay frameborder="0" allowFullScreen> </iframe>
            
            <div id="video-overlay-container">
                <h1 id="heading">
                    {props.name}
                </h1> 
                <h6 class="desc">
                    {props.desc}
                </h6>
            </div>


            </div>
            
        </div>
        
    );
}
export default lPage