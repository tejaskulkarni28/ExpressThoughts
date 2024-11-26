import { useState } from "react";
import { authLogin } from "../services/authLogin";
import {useDispatch} from "react-redux";
import { login } from "../redux/slices/loginAuthSlice";
import { useNavigate } from "react-router-dom";
import Message from "../components/Message";
const Login = ()=>{
        const navigate = useNavigate();
        const[username, setUserName] = useState('');
        const[plainPassword, setPlainPassword] = useState('');
        const[feedbackMessage,setFeedbackMessage] = useState('');
        const[showAlert, setShowAlert] = useState(false);
        console.log(`/client/component/login username ${username} plainpassword ${plainPassword}`)
        const dispatch = useDispatch();
        const handleSubmit = async(event)=>{
                event.preventDefault();
                try{
                        const response = await authLogin(username, plainPassword);
                        if(response?.status === 200 && response?.data.success === true){
                                dispatch(login());
                                navigate("/");
                                console.log(`response status: ${response.data.message}`)
                                setFeedbackMessage(response?.data.message)
                                setShowAlert(true);    
                        }else if(response?.status === 200 && response.data.success === false){
                                setFeedbackMessage(response?.data.message)
                                setShowAlert(true);    
                        }else{
                                setFeedbackMessage(response?.data.message)
                                setShowAlert(true);    
                        }
                }catch(error){
                        console.log(`Pages/Login: ${error}`);
                        // setFeedbackMessage(response.data.message);
                        // setShowAlert(true);
                }
        }
        const handleRoute = (event)=>{
                event.preventDefault();
                navigate("/register");
        }
        return(
                <>
                        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} placeholder="your username" required/>
                        <input type="text" onChange={(event)=>{setPlainPassword(event.target.value)}} value={plainPassword} placeholder="your password" required/>
                        <button onClick={handleSubmit}>Login</button>
                        <button onClick={handleRoute}>Register</button>
                        {
                                showAlert && (
                                        <Message message={feedbackMessage} setShowAlert={setShowAlert}
                                        />
                                )
                        }
                </>
        )
}

export default Login;