import React from "react";
import {  useHistory } from "react-router-dom";

function Understanding_2(){
    const history = useHistory();

const handleClick = () => {
    history.push('/Support_3')
}
return(
<div>
<h2> Page 2 of 6 </h2>
<h1>How well are you understanding the content?</h1>
    
<input data-testid="input"
          
      />
      <button data-testid="next" onClick={handleClick}>Next</button>
</div>
)
}
export default Understanding_2;