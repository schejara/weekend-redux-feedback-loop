import React from "react";

import {  useHistory } from "react-router-dom";
function Review(){
    const history = useHistory();
    const handleClick = () => {
        history.push('/Thankyou_6')
  }
return(
<div>
<h2> Page 5 of 6</h2>
<h1>Review Your Feedback</h1>

    
<input data-testid="input"/>       
      
      <button data-testid="next" onClick={handleClick}>Next</button>  
      </div>

)
}
export default Review;