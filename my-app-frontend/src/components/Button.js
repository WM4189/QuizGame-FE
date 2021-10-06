import React, { useState } from 'react';




function Button({ handleAnswer, answer, index, questionindex}){
    // reset, setReset, points,

    const [isActive, setActive] = useState(true)


function toggleClass(){
    setActive(isActive => !isActive);
    console.log("THIS IS WORKING")
    
}


    return(
        <button
        id="the Button" 
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