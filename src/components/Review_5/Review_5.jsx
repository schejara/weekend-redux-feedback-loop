import React from "react";
import {  useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Review(){
    const history = useHistory();
    const displayFeeling = useSelector(store => store.feelingStore)
    const displayUnderstanding = useSelector(store => store.understandingStore)
    const displaySupport = useSelector(store => store.supportStore)
    const displayComment = useSelector(store => store.commentsStore)
    
    
    
    const handleClick = () => {
        history.push('/Thankyou_6')
  }

return(
<div>
<h2> Page 5 of 6</h2>
<h1>Review Your Feedback</h1>

<h4>Feelings : {displayFeeling[0].feeling}</h4>
<h4>Understanding :{displayUnderstanding[0].understanding}</h4>
<h4>Support :{displaySupport[0].support}</h4>
<h4>Comments :{displayComment[0].comments}</h4>
    
   <button onClick={handleClick}>Submit</button>    
      </div>

)
}
export default Review;