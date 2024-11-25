import { useState } from "react";
import { authLogin } from "../services/authLogin";
const Login = ()=>{
        const[username, setUserName] = useState('');
        const[plainPassword, setPlainPassword] = useState('');
        const handleSubmit = ()=>{
                authLogin(username, plainPassword);
        }
        return(
                <>
                        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} placeholder="your username" />
                        <input type="text" onChange={(event)=>{setPlainPassword(event.target.value)}} value={plainPassword} placeholder="your password" />
                        <button onClick={handleSubmit}>Login</button>
                        <button>Register</button>
                </>
        )
}

export default Login;