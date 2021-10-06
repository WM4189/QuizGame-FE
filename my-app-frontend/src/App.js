import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Subject from './components/Subject.js';
import Html from './components/Html.js';
import Css from './components/Css.js';
import JavaScript from './components/JavaScript';
import Python from './components/Python';
import Sql from './components/Sql';
import Java from './components/Java';
import Cplus from './components/Cplus';
import QuestionForm from './components/QuestionForm.js';
import LandingPage from './components/LandingPage.js';
import QuestionList from './components/QuestionList';


function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  // console.log(questions)

  
  //I think the number is behind, you might have to mess with that. im sure easy fix sry 
const handleAnswer = (answer, questionindex) => {
if(answer === questions[questionindex].correct_answer){
  setScore(score + 1)
}

}

//   const updateQuestion = (formData, id) => {
//     const {prompt, answer1, answer2, answer3, answer4, correct_answer, subject_id} = formData

//   const question = {
//     prompt, 
//     answer1, 
//     answer2,
//     answer3,
//     answer4,
//     correct_answer,
//     subject_id
//   }
//   const configObj = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(question)
//   }
//   fetch(`http://localhost:9292/question/${id}`, configObj)
// .then(r => r.json())
// .then(data => console.log(data))
// }

  // const deleteQuestion = (id) => {
  //   fetch(`http://localhost:9292/question/${id}`, {
  //     method: 'DELETE'
  //   })
  // }

  // const getSubjects = () => {
  //   fetch('http://localhost:9292/subjects')
  //   .then(r => r.json())
  //   .then(subject => console.log(subject))
  // }



  // const getSubject = (id) => {
  //   fetch(`http://localhost:9292/subject/${id}`)
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }
  


  return (
    <div className="App">
      <Switch>
      <Route path="/html">
        <Html handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/css">
        <Css handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/javaScript">
        <JavaScript handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/python">
        <Python handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/sql">
        <Sql handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/java">
        <Java handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/cplus">
        <Cplus handleAnswer={handleAnswer} 
        questions={questions}
        setQuestions={setQuestions} 
        points={score} 
        setPoints={setScore} />
        </Route>
        <Route path="/subjects">
        <Subject />
        </Route>
        <Route path='/question'>
          <QuestionForm /> 
        </Route>
        <Route path="/questionList">
          <QuestionList handleAnswer={handleAnswer} setQuestions={setQuestions} questions={questions}/> 
        </Route>
        <Route exact path='/'>
        <LandingPage />
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
