import React from "react";

function card(props){
    var desc = props.desc;
    return(
        <div id="card-container">
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
        </div>
    );
}

export default card