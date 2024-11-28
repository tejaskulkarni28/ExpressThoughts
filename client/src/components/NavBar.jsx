import React from "react";
import { Link } from "react-router-dom";
import  '../style/navbar.css';
const NavBar = ()=>{
        return(
                <div className="nav-container">
                        <div className="nav-content">
                        {/* Link declarative for example when `user clicks` */}
                            <Link to="/" ><p>Home</p></Link>
                            <Link to="/my-thoughts"><p>Perspectives</p></Link>
                            <Link to="/login"><p>Logout</p></Link>
                        </div>
                </div>
        )
}
export default NavBar;