import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Review(){
    const history = useHistory();
    const displayFeeling = useSelector(store => store.feelingStore)
    const displayUnderstanding = useSelector(store => store.understandingStore)
    const displaySupport = useSelector(store => store.supportStore)
    const displayComment = useSelector(store => store.commentsStore)
    
    const addFeedback = (event) => {
        event.preventDefault();
    
        axios.post('/api/feedback', {
            feeling: displayFeeling[0].feeling,
            understanding: displayUnderstanding[0].understanding,
            support: displaySupport[0].support,
            comments: displayComment[0].comments
        })
        .then(response => {
            console.log('success!', response.data);
            history.push('/Thankyou_6'); // Moved inside the then block
        })
        .catch(err => {
            console.error(err);
        });
    };
    

return(
<div>
<h4> Page 5 of 6</h4>
<h1>Review Your Feedback</h1>

<h4>Feelings : {displayFeeling[0].feeling}</h4>
<h4>Understanding :{displayUnderstanding[0].understanding}</h4>
<h4>Support :{displaySupport[0].support}</h4>
<h4>Comments :{displayComment[0].comments}</h4>
    
   <button onClick={addFeedback} data-testid="next">Submit</button>    
      </div>

)
}
export default Review;