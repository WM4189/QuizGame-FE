import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white"
  };


function JavaScript(){
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/subject/8")
        .then((r) => r.json())
        .then((questions) => setQuestions(questions.questions))
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


const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={handleDeleteClick}
    //   onAnswerChange={handleAnswerChange}
    />
  ));

      
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
        </section>
        </>
    )
}

export default JavaScript;