import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import QuestionItem from './QuestionItem';


function QuestionList(){
// const history = useHistory();
const [questions, setQuestions] = useState([]);


useEffect(() => {
    fetch("http://localhost:9292/questions/8")
      .then((r) => r.json())
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);
  console.log(questions)

//   const {prompt, answer1, answer2, answer3, answer4, correct_answer, id} = questions
//     const answers = [answer1, answer2, answer3, answer4]
//     const options = answers.map((answer, index) => (
//         <option key={index} value={index}>
//           {answer}
//         </option>
//     ));


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


//   function handleAnswerChange(id, correct_answer) {
//     fetch(`hhttp://localhost:9292/question/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({"correct_answer" : correct_answer }),
//     })
//       .then((r) => r.json())
//       .then((updatedQuestion) => {
//         const updatedQuestions = questions.map((q) => {
//           if (q.id === updatedQuestion.id) return updatedQuestion;
//           return q;
//         });
//         setQuestions(updatedQuestions);
//       });
//   }


  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={handleDeleteClick}
    //   onAnswerChange={handleAnswerChange}
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