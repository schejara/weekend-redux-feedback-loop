import React, {useState} from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Support_3(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [support,setSupport] = useState("");

    const handleChange = (event) => {
       setSupport(event.target.value);
        
       }
    const handleClick = () => {
        dispatch({
            type : 'FEEDBACK3',
            payload : {support : support}
        })

        history.push('/Comments_4')
    }
return(
<div>
<h4> Page 3 of 6 </h4>

<h1>How well are you being supported?</h1>
    
<input data-testid="input"
value = {support}
onChange={handleChange}
/>
<button data-testid="next" onClick={handleClick}>Next</button>
</div>
)
}
export default Support_3;