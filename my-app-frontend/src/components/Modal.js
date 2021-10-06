import React from 'react';

const Modal = props => {
   const {show, points} = props
    if (!props.show){
        return null
    }
    return (
        <div className="modal">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title">Great job!</h4>
        </div>
        <div className="modal-body">
            You got {points} questions correct!!
        </div>
        <div className="modal-footer">
            <button onClick={props.onClose} className='button'>Close</button>
        </div>
        </div>
        </div>
    )
}

export default Modal;