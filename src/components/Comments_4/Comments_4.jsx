import React, {useState} from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Comments_4(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments,setComments] = useState("");

    const handleChange = (event) => {
        setComments(event.target.value);
      
        
       }

    const handleClick = () => {
        dispatch({
            type : 'FEEDBACK4',
            payload : {comments : comments}
        })
        history.push('/Review_5')
  }

    return(
        <div>
        <h2> Page 4 of 6 </h2>
        
        <h1>Any comments you want to leave?</h1>
            
        <input 
        data-testid="input"
        type = "text"
        value = {comments}
         onChange={handleChange}
        />
        <button data-testid="next" onClick={handleClick}>Next</button>  
        </div>
        )
        }

export default Comments_4;