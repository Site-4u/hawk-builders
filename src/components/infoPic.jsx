import React from "react";

// Input - "name, desc, image"
function aboutUs(props){
    return(
        <div id="about-us-page-container">
            <div class="container">
                <div class="info">
                    <h2>
                        {props.name}
                    </h2>
                    <p>
                        {props.desc}
                    </p>
                </div>
                <div class="image">
                    <img src={props.image}></img>
                </div>
            </div>
        </div>
    );
}

export default aboutUs