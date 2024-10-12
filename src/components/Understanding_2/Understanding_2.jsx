import React, {useState} from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Understanding_2(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [understanding, setUnderstanding] = useState("");

    const handleChange = (event) => {
        setUnderstanding(event.target.value);
        
        
       }

const handleClick = () => {
    dispatch({
        type : 'FEEDBACK2',
        payload : {understanding : understanding}
    })

    history.push('/Support_3')
}
return(
<div>
<h2> Page 2 of 6 </h2>
<h1>How well are you understanding the content?</h1>
    
<input data-testid="input"
value = {understanding}
onChange={handleChange}
/>
      <button data-testid="next" onClick={handleClick}>Next</button>
</div>
)
}
export default Understanding_2;