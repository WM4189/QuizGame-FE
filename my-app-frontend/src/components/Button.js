import React, { useState } from 'react';

function Button({handleAnswer, answer, index, questionindex}){
const [isActive, setActive] = useState(true)


function toggleClass(){
    setActive(!isActive);
    console.log("THIS IS WORKING")
}



    return(
        <button 
        className= {isActive ? "white_button" : "selected_answer"}
        key={index} 
        value={index}
        onClick={() => {
            handleAnswer(answer, questionindex);
            toggleClass();
           //potentially call toggleClass
        }}>
        {answer}
        </button>
    )
}

export default Button;