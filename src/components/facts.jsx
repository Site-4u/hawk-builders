import React, {useEffect} from "react";
import { FaUserFriends } from "react-icons/fa"
import { BsHouseFill, BsSearch } from "react-icons/bs";


// Input - "message1, message2, message3"
function facts(props){
    return(
        <div id="facts-section-container">
            <div class="container">
                <div class="info">
                    <FaUserFriends size="6rem" color="white" />
                    <p>{props.message1}</p>
                </div>
                <div class="info">
                    <BsHouseFill size="6rem" color="white" />
                    <p>{props.message2}</p>
                </div>
                <div class="info">
                    <BsSearch size="6rem" color="white" />
                    <p>{props.message3}</p>
                </div>
            </div>
        </div>
    );
}
export default facts