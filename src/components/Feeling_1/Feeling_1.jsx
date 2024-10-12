import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Feeling_1(){
    const history = useHistory();
    const dispatch = useDispatch();
    
    
    let [Feeling, setFeeling] = useState({Feeling :"" })
    
    const handleChange = (value) => {
    setFeeling(value);
   }



    const handleClick = () => {
        dispatch({
            type : FEEDBACK1,
            payload : {Feeling}
        })
     history.push("/Understanding_2");
     console.log("I was here")
    
    }

return(
<div>
    <h2> Page 1 of 6 </h2>
<h1>How are you feeling today?</h1>
    
<input data-testid="input"
value = {Feeling}
onChange={(event) => handleChange(event.target.value)}
/>
<button data-testid="next" onClick={handleClick}>Next</button> 


</div>
)
}
export default Feeling_1;