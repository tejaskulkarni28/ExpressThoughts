import React from "react";
import { Link } from "react-router-dom";
import  '../style/navbar.css';
import { logout } from "../redux/slices/loginAuthSlice";
import { useDispatch } from "react-redux";
const NavBar = ()=>{
        const dispatch = useDispatch();
        const handleLogout = ()=>{
                dispatch(logout())
        }
        return(
                <div className="nav-container">
                        <div className="nav-content">
                        {/* Link declarative for example when `user clicks` */}
                            <Link to="/" ><p>Home</p></Link>
                            <Link to="/my-thoughts"><p>Perspectives</p></Link>
                            <Link to="/login" onClick={handleLogout}><p>Logout</p></Link>
                        </div>
                </div>
        )
}
export default NavBar;