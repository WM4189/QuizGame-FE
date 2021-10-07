import './App.css';
import { useState } from 'react';
import { Route, Switch } from "react-router-dom";
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

  const handleAnswer = (answer, questionindex) => {
    if(answer === questions[questionindex].correct_answer){
      setScore(score+1)
    }
    console.log(score)
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/html">
          <Html 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/css">
          <Css 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/javaScript">
          <JavaScript 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/python">
          <Python 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/sql">
          <Sql 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/java">
          <Java 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path="/cplus">
          <Cplus 
            handleAnswer={handleAnswer} 
            questions={questions}
            setQuestions={setQuestions} 
            points={score} 
            setPoints={setScore} 
          />
        </Route>
        <Route path='/question'>
          <QuestionForm /> 
        </Route>
        <Route path="/questionList">
          <QuestionList 
            handleAnswer={handleAnswer} 
            setQuestions={setQuestions} 
            questions={questions}
          /> 
        </Route>
        <Route exact path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
