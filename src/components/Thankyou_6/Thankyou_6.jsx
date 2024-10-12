import React from "react";
import {  useHistory } from "react-router-dom";

function Thankyou_6(){
    const history = useHistory();
    const handleClick = () => {
        history.push('/')
    }
return(
<div>
<h4> Page 6 of 6 </h4>

<h1>Thank You</h1>

      <button data-testid="next" onClick={handleClick}>Leave New Feedback</button>  
</div>
)

}
export default Thankyou_6;