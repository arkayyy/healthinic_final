import React from 'react'
import {disss} from "./trial2"


function setTexting(){
    return{
        __html: disss,
    }
}
function Result() {

    
    return (
        <div className="announce">
            <h1>jnjnn<span dangerouslySetInnerHTML={setTexting()}></span></h1>
            
        </div>
    )
}

export default Result
