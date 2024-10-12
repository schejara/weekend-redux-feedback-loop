import React from 'react';
import './App.css';
import Feeling_1 from '../Feeling_1/Feeling_1';
import Understanding_2 from '../Understanding_2/Understanding_2';
import Support_3 from '../Support_3/Support_3';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Comments_4 from '../Comments_4/Comments_4';
import Review_5 from '../Review_5/Review_5';
import Thankyou_6 from '../Thankyou_6/Thankyou_6';

function App() {
  return (
    // Route Start
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        
        </header>
        
        <Switch>
          <Route path="/" exact>
            <Feeling_1/>  
          </Route>
          <Route path="/Understanding_2">
            <Understanding_2/>
          </Route>
          <Route path="/Support_3">
            <Support_3/>
          </Route>
          <Route path="/Comments_4">
            <Comments_4/>
          </Route>
          <Route path="/Review_5">
            <Review_5/>
          </Route>
          <Route path="/Thankyou_6">
            <Thankyou_6/>
          </Route>

        </Switch>
      </div>
    </Router>
    // Router End
  );
}

export default App;
