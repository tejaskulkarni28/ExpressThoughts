import React from "react";
import { Link } from "react-router-dom";
import styles from '../style/navbar.module.css';
import { logout } from "../redux/slices/loginAuthSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={styles['nav-container']}>
            <div className={styles['nav-content']}>
                {/* Declarative Links */}
                <Link to="/" className={styles.link}><p>Home</p></Link>
                <Link to="/my-thoughts" className={styles.link}><p>Perspectives</p></Link>
                <Link to="/login" className={styles.link} onClick={handleLogout}><p>Logout</p></Link>
            </div>
        </div>
    );
};

export default NavBar;
