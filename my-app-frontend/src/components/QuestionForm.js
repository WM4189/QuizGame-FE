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


    return(
        <div>
            HELLO
        </div>
    )
}

export default QuestionForm;