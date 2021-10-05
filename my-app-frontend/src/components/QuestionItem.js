import React from 'react';

function QuestionItem({question, onDeleteClick}){
    const {prompt, answer1, answer2, answer3, answer4, correct_answer, id} = question
    const answers = [answer1, answer2, answer3, answer4]
    const options = answers.map((answer, index) => (
        <option key={index} value={index}>
          {answer}
        </option>
    ));

    function handleDeleteClick() {
        onDeleteClick(id);
      }

    return (
        <li>
            <h3>Question {id - 7}:</h3>
            <b><h4>{prompt}</h4></b>
            <label>
                <h5><em>Answer {id - 7}:</em></h5>
                <select>
                {options}
                </select>
                
            </label>
            <button onClick={handleDeleteClick}>Delete Question</button>
        </li>
    )
}

export default QuestionItem;