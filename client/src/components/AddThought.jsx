import { useState } from "react";
import thoughtService from "../services/thoughtService";
import Message from "./Message";
import styles from '../style/addThought.module.css'; // Ensure correct path to CSS module

const AddThought = (props) => {
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const sessionUserId = props.sessionUserId;
    console.log(`AddThought userid prop: ${sessionUserId}`);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.trim() !== '') {
            thoughtService(state, sessionUserId, setMessage);
            setShowAlert(true);
            setState(''); // Clear input after submission
        } else {
            alert('Please fill the required field');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {message && showAlert && (
                    <Message message={message} setShowAlert={setShowAlert} />
                )}
                <input 
                    type="text" 
                    className={styles['input-box']}
                    onChange={(event) => setState(event.target.value)} 
                    placeholder="Tweet your thought.." 
                    value={state}
                />
                <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className={styles['sbt-btn']}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddThought;
