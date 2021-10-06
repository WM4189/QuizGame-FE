import React, {useEffect, useState} from 'react';




const Modal = props => {
 
    const {show, points, questions } = props

    if (!show){
        return null
    }else{
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }

  
    console.log(points)
    console.log(questions.length)
    

    return (
        <div className="modal">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title">Great job!</h4>
        </div>
        <div className="modal-body">
            {/* You got {points} questions correct!! */}
            You got {(points/questions.length * 100).toFixed(2)} % correct!! 
            
        </div>
        <div className="modal-footer">
            {/* <button onClick={props.onClose} className='button'>Close</button> */}
        Refreshing Page....
        </div>
        </div>
        </div>
    )
}

export default Modal;