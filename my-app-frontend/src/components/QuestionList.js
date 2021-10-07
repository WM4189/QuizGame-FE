import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem';

function QuestionList({handleAnswer}){
const [questions, setQuestions] = useState([]);

useEffect(() => {
    fetch("http://localhost:9292/questions/8")
      .then((r) => r.json())
      .then((questions) => {
        setQuestions(questions);
      });
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

  const questionItems = questions.map((q, index) => (
    <QuestionItem
    key={q.id}
    questionindex={index}
    question={q}
    onDeleteClick={handleDeleteClick}
    handleAnswer={handleAnswer}
    />
  ));

  return (
    <section>
      <h1>Edit Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;