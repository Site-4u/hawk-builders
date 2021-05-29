import React from "react";
import {BiArrowBack} from "react-icons/bi";
import Link from "next/link";
function back(){
    return(
        
        <div id="back">
            <Link href="/">
                    <div class="container">
                        <BiArrowBack size="2.5rem" className="arrow" />
                        <h3> Back </h3>
                    </div>
            </Link>
        </div>
    );
}


export default back;
