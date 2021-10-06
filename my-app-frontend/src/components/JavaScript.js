import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import { NavLink } from "react-router-dom";
import Modal from "./Modal.js";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white"
  };
// 

function JavaScript({questions, setQuestions, points, handleAnswer, setPoints}){
// const {prompt, answer1, answer2, answer3, answer4, correct_answer, id} = questions 
//this is to show the modal; assuming we will de

const [show, setShow ] = useState(false)

// const [reset, setReset] = useState(true)

// console.log(questions.length)



    useEffect(() => {
        fetch("http://localhost:9292/subject/1")
        .then((r) => r.json())
        .then((data) => {setQuestions(data.questions)
        // console.log(data.questions)
      })
    }, []);
  
    

  function handleDeleteClick(id) {
    fetch(`http://localhost:9292/question/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = questions.filter((q) => q.id !== id);
        setQuestions(updatedQuestions);
      });
  }



//   const getSubject = (id) => {
//     fetch(`http://localhost:9292/subject/${id}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//   }
//   getSubject(8)




const questionItems = questions.map((q, index) => (
  <QuestionItem
    key={q.id}
    question={q}
    questionindex={index}
    onDeleteClick={handleDeleteClick}
    handleAnswer={handleAnswer}
    // points={points}
    // reset={reset}
    // setReset={setReset}
  />
));



// const buttonClass = points === 0 ? "white_button" : "selected_answer" 
 
    return (
        <>
        <NavLink
			to="/"
			exact
			style={linkStyles}
			// activeStyle={{
			//   background: "blue",
			// }}
		  >
		  Home
		</NavLink>
        <NavLink
			to="/question"
			exact
			style={linkStyles}
			// activeStyle={{
			//   background: "blue",
			// }}
		  >
		  Add Question
		</NavLink>
        <section>
            <b><h1>JavaScript Quiz</h1></b>
            <h3><ul>{questionItems}</ul></h3>
            <button className="white_button" 
            onClick={()=> setShow(show => !show)}>Submit Quiz</button>
            <Modal onClose={()=> {setShow(show => !show);
                                  setPoints(0);
                                  }} questions = {questions} setShow={setShow} show={show} points={points}/>
        </section>
        </>
    )
}


export default JavaScript;