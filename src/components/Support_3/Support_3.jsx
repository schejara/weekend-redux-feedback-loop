import React from "react";
import {  useHistory } from "react-router-dom";

function Support_3(){
    const history = useHistory();
    const handleClick = () => {
        history.push('/Comments_4')
    }
return(
<div>
<h2> Page 3 of 6 </h2>

<h1>How well are you being supported?</h1>
    
<input data-testid="input"/>    
<button data-testid="next" onClick={handleClick}>Next</button>
</div>
)
}
export default Support_3;