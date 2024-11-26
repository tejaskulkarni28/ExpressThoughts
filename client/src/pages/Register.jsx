import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { authRegister } from "../services/authRegister";
const Register = ()=>{
        const [username, setUserName] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const handleSubmit = async (event)=>{
                event.preventDefault();
                console.log('handleSubmit triggered')
                try{
                        const response = await authRegister(username, password)
                        console.log(`client/register/response/handleSubmit: ${response}`)
                }catch(error){
                        console.log(error)
                }
        }
        const handleRoute = (event)=>{
                event.preventDefault();
                navigate("/login");
        }
        return(
                <>
                        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} placeholder="create username" />
                        <input type="text" onChange={(event)=>{
                                setPassword(event.target.value) 
                        }} value={password} placeholder="create password" />
                        <button onClick={handleSubmit}>Register</button>
                        <button onClick={handleRoute}>Login</button>
                </>
        )
}

export default Register;