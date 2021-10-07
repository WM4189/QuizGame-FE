import React, { useState } from 'react';
import Button from './Button.js'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "2.5px",
    margin: "0 3px 3px",
    background: "black",
    textDecoration: "none",
    color: "white",
    fontSize: "15px"
};

const QuestionItem = props => {
    const [ disable, setDisable ] = useState(false)
    const {question, onDeleteClick, questionindex, handleAnswer} = props 
    const {prompt, answer1, answer2, answer3, answer4, id} = question
    const answers = [answer1, answer2, answer3, answer4]

    const buttons = answers.map((answer, index) => (
        <Button key={index} 
        index={index} 
        handleAnswer={handleAnswer} 
        answer={answer} 
        questionindex={questionindex}
        disable={disable}
        setDisable={setDisable}
        />
    ));

    function handleDeleteClick() {
        onDeleteClick(id);
    }

    return (
        <li>
            <b><h2>{prompt}</h2></b>
            <h5><em> Choose Your Answer:</em></h5>
            {buttons}
            <button style={linkStyles} className='delete_button'onClick={handleDeleteClick}>Delete</button>
        </li>
    )
}

export default QuestionItem;