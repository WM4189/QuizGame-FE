import { useState } from 'react';

const Button = props => {
    const {disable, setDisable, handleAnswer, answer, index, correct_index, correct_answer} = props;
    const [answerColor, setColor] = useState("white_button");

    function handleColor(e){
        if(e.target.innerText === correct_answer){
            setColor("green_button");
        }else{
            setColor("red_button");
        }
    }

    return(
        <button
            className= {answerColor}
            key={index} 
            value={index}
            disabled={disable}
            onClick={(e) => {
                handleColor(e);
                handleAnswer(answer, correct_index);
                setDisable(disable => !disable);
            }}>
            {answer}
        </button>
    )
}

export default Button;