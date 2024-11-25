import { useState } from "react";
import thoughtService from "../services/thoughtService";
import Message from "./Message";
import '../style/addThought.css';
const AddThought = () => {
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Only call thoughtService when state is not empty
        if (state.trim() !== '') {
            thoughtService(state, setMessage);
            setShowAlert(true)
            setState(''); // Clear input after submission
        }else{
            alert('Please fill the required field')
        }
    }

    return (
        <div className="container">
            <div className="content">
                {message && showAlert && <Message message={message} setShowAlert={setShowAlert} />}
                <input 
                    type="text" 
                    className="input-box"
                    onChange={(event) => setState(event.target.value)} 
                    placeholder="Tweet your thought.." 
                    value={state}
                />
                <button type="submit" onClick={handleSubmit} className="sbt-btn
                ">Submit</button>
            </div>
        </div>
    )
}

export default AddThought;
