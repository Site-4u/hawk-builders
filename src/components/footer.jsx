import React from "react";

function footer(props){
    return(
        <div id="footer-container">
            <div class="container">
                <h3>
                    ©{new Date().getFullYear()} {props.name}. All rights reserved.
                </h3>
            </div>
        </div>
    );
}

export default footer;