import React from "react";
import {  useHistory } from "react-router-dom";

function Thankyou_6(){
    const history = useHistory();
    const handleClick = () => {
        history.push('/Feeling_1')
return(
<div>
    <h2>Page 6 of 6</h2>
<h1>Thank you</h1>
    
<input data-testid="input"
          
      />
      <button data-testid="next" onClick={handleClick}>Next</button>  
</div>
)
}
}
export default Thankyou_6;