import React from "react";
import {  useHistory } from "react-router-dom";

function Comments_4(){
    const history = useHistory();
    const handleClick = () => {
        history.push('/Review_5')
  }

    return(
        <div>
        <h2> Page 4 of 6 </h2>
        
        <h1>Any comments you want to leave?</h1>
            
        <input data-testid="input"/>  
          
        <button data-testid="next" onClick={handleClick}>Next</button>  
        </div>
        )
        }

export default Comments_4;