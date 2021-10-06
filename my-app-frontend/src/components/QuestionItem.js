import React from 'react';
import Button from './Button.js'
function QuestionItem({question, onDeleteClick, questionindex, handleAnswer}){
   

const {prompt, answer1, answer2, answer3, answer4, correct_answer, id} = question
const answers = [answer1, answer2, answer3, answer4]


const buttons = answers.map((answer, index) => (

    <Button key={index} 
    index={index} 
    handleAnswer={handleAnswer} 
    answer={answer} 
    questionindex={questionindex}
    />
    ));
 
   
    function handleDeleteClick() {
        onDeleteClick(id);
      }

    return (
        <li>
            <h3>Question {id - 7}:</h3>
            <b><h4>{prompt}</h4></b>
            <label>
                <h5><em> Choose Your Answer:</em></h5>
                {/*  */}
                {/* {id - 7}: */}
                {/* <select> */}
                {buttons}
                {/* </select> */}
                
            </label>
            <button className='delete_button'onClick={handleDeleteClick}>Delete Question</button>
        </li>
    )
}

export default QuestionItem;