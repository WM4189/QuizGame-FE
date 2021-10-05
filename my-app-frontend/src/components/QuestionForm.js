import React from 'react';

function QuestionForm(){
    // fetch(`http://localhost:9292/question/${id}`, configObj)
    // .then(r => r.json())
    // .then(data => console.log(data))
    // }
  
    const deleteQuestion = (id) => {
      fetch(`http://localhost:9292/question/${id}`, {
        method: 'DELETE'
      })
    }
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

    return(
        <div>
            HELLO
        </div>
    )
}

export default QuestionForm;