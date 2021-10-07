import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";




const Modal = props => {
    const history = useHistory();
 
    const {show, points, questions } = props

    if (!show){
        return null
    }else{
        setTimeout(() => {
            
            history.push("/")
            window.location.reload()
        }, 3000);
    }

  
    console.log(points)
    console.log(questions.length)

    let total = (points/questions.length * 100).toFixed(1)

    const message = () =>{
                if (total >= 0 && total <= 60){
                return "Never Give Up!!"
                }else if(total >= 60 && total <= 80){
                    return "Not too Shabby"
                }else{
                return "Spectacular!!"
            }  
    }
    
    

    return (
        <div className="modal">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title">{message()}</h4>
            {/* <h4 className="modal-title">{score}</h4> */}
        </div>
        <div className="modal-body">
            {/* You got {points} questions correct!! */}
             {(points/questions.length * 100).toFixed(1)} % correct!! 
            
        </div>
        <div className="modal-footer">
            {/* <button onClick={props.onClose} className='button'>Close</button> */}
        Try Another Subject
        </div>
        </div>
        </div>
    )
}

export default Modal;