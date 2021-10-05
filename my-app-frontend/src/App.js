import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Subject from './components/Subject.js';
import Html from './components/Html.js';
import Css from './components/Css.js';
import JavaScript from './components/JavaScript';
import Python from './components/Python';
import Java from './components/Java';
import Cplus from './components/Cplus';
import QuestionForm from './components/QuestionForm.js';
import LandingPage from './components/LandingPage.js';
// import QuestionList from './components/QuestionForm.js'

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
  }
  fetch(`http://localhost:9292/question/${id}`, configObj)
.then(r => r.json())
.then(data => console.log(data))
}

  const deleteQuestion = (id) => {
    fetch(`http://localhost:9292/question/${id}`, {
      method: 'DELETE'
    })
  }

  const getSubjects = () => {
    fetch('http://localhost:9292/subjects')
    .then(r => r.json())
    .then(subject => console.log(subject))
  }



  const getSubject = (id) => {
    fetch(`http://localhost:9292/subject/${id}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  // debugger;

  return (
    <div className="App">
      <Switch>
      <Route path="/html">
        <Html />
        </Route>
        <Route path="/css">
        <Css />
        </Route>
        <Route path="/javaScript">
        <JavaScript />
        </Route>
        <Route path="/python">
        <Python />
        </Route>
        <Route path="/java">
        <Java />
        </Route>
        <Route path="/cplus">
        <Cplus />
        </Route>
        <Route path="/subjects">
        <Subject />
        </Route>
        <Route path='/question'>
          <QuestionForm /> 
        </Route>
        {/* <Route>
          <QuestionList /> 
          </Route> */}
        <Route exact path='/'>
        <LandingPage />
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
