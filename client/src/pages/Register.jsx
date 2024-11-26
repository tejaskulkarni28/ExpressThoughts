import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { authRegister } from "../services/authRegister";
import Message from "../components/Message";
const Register = ()=>{
        const [username, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const [feedbackMessage, setFeedbackMessage] = useState('');
        const [showAlert, setShowAlert] = useState(false);
        const handleSubmit = async (event)=>{
                event.preventDefault();
                console.log('handleSubmit triggered')
                try{
                        const response = await authRegister(username, password)
                        if(response?.status === 200 && response?.data.success === true){
                                setFeedbackMessage("New user registered")
                        }else if(response?.status === 200 && response?.data.success === false){
                               setFeedbackMessage("Username already taken")
                        }
                        setShowAlert(true);
                        console.log(`client/register/response/handleSubmit: ${response.status}`)
                        console.log(`client/register/response/handleSubmit: ${response.data.message}`)
                }catch(error){
                        console.log(error)
                        setFeedbackMessage("An error occurred while registering.")
                        setShowAlert(true);
                }
        }
        const handleRoute = (event)=>{
                event.preventDefault();
                navigate("/login");
        }
        return(
                <>
                        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} placeholder="create username" required/>
                        <input type="text" onChange={(event)=>{
                                setPassword(event.target.value) 
                        }} value={password} placeholder="create password" required/>
                        <button onClick={handleSubmit}>Register</button>
                        <button onClick={handleRoute}>Login</button>

                        {
                                showAlert && (
                                        <Message 
                                                message={feedbackMessage}
                                                setShowAlert={setShowAlert} // passing the state updater
                                        />
                                )
                        }
                </>
        )
}

export default Register;