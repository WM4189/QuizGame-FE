import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Subject from './components/Subject.js';
import QuestionForm from './components/QuestionForm.js';


function App() {

  const updateQuestion = (formData, id) => {
    const {prompt, answer1, answer2, answer3, answer4, correct_answer, subject_id} = formData

  const question = {
    prompt, 
    answer1, 
    answer2,
    answer3,
    answer4,
    correct_answer,
    subject_id
  }
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  }}
  
  // debugger;
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route path="/subjects">
        <Subject />
        </Route>
        <Route path='/question'>
          <QuestionForm /> 
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
