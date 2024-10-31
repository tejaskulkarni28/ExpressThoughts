import React from "react";
import { Link } from "react-router-dom";
import navbar from '../style/navbar.css';
const NavBar = ()=>{
        return(
                <div className="nav-container">
                        <div className="nav-content">
                            <Link to="/" ><p>Home</p></Link>
                            <Link to="/my-thoughts"><p>Perspectives</p></Link>
                        </div>
                </div>
        )
}
export default NavBar;