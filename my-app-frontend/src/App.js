import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Subject from './components/Subject.js';
import QuestionForm from './components/QuestionForm.js';
import LandingPage from './components/LandingPage.js';

function App() {

 
  
  // debugger;

  return (
    <div className="App">
      <Switch>
        <Route path="/subjects">
        <Subject />
        </Route>
        <Route path='/question'>
          <QuestionForm /> 
        </Route>
        <Route exact path='/'>
        <LandingPage />
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
