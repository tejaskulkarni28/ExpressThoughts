import { useState } from "react";
import { authLogin } from "../services/authLogin";
import {useDispatch} from "react-redux";
import { login } from "../redux/slices/loginAuthSlice";
import { useNavigate } from "react-router-dom";
const Login = ()=>{
        const navigate = useNavigate();
        const[username, setUserName] = useState('');
        const[plainPassword, setPlainPassword] = useState('');
        console.log(`/client/component/login username ${username} plainpassword ${plainPassword}`)
        const dispatch = useDispatch();
        const handleSubmit = async(event)=>{
                event.preventDefault();
                // console.log(`/client/component/login/handleSubmit username ${username} plainpassword ${plainPassword}`)
                const result = await authLogin(username, plainPassword);
                if(result){
                        console.log(result)
                        dispatch(login());
                        navigate("/")
                }else{
                        console.log(result)
                }
        }
        const handleRoute = (event)=>{
                event.preventDefault();
                navigate("/register");
        }
        return(
                <>
                        <input type="text" onChange={(event)=>{setUserName(event.target.value)}} value={username} placeholder="your username" />
                        <input type="text" onChange={(event)=>{setPlainPassword(event.target.value)}} value={plainPassword} placeholder="your password" />
                        <button onClick={handleSubmit}>Login</button>
                        <button onClick={handleRoute}>Register</button>
                </>
        )
}

export default Login;