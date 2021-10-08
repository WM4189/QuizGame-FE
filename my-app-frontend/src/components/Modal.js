import { useHistory } from "react-router-dom";

const Modal = props => {
    const history = useHistory();
    const {show, points, questions, setPoints} = props;
    let total = (points/questions.length * 100).toFixed(1);
    
    if (!show){
        return null
    }else{
        setTimeout(() => {
            history.push("/");
            setPoints(0);
            // window.location.reload();
        }, 2000);
    }

    const message = () =>{
        if (total >= 0 && total <= 60){
            return "Never Give Up!!"
        }else if(total >= 60 && total <= 80){
            return "Not Too Shabby"
        }else{
            return "Spectacular!!"
        } 
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{message()}</h4>
                </div>
                <div className="modal-body">
                    {(points/questions.length * 100).toFixed(1)} % correct 
                </div>
                <div className="modal-footer">
                    Try Another Subject
                </div>
            </div>
        </div>
    )
}

export default Modal;