import { useState } from 'react';

const Button = props => {
    const { disable, setDisable, handleAnswer, answer, index, questionindex} = props;
    const [isActive, setActive] = useState(true);

    function toggleClass(){
        setActive(isActive => !isActive);
        setDisable(disable => !disable);
    }

    return(
        <button
            id="the Button" 
            className= {isActive ? "white_button" : "selected_answer"}
            key={index} 
            value={index}
            disabled={disable}
            onClick={() => {
                handleAnswer(answer, questionindex);
                toggleClass();
            }}>
            {answer}
        </button>
    )
}

export default Button;