import React, {useEffect, useState} from 'react';
import {NavLink, useSearchParams} from "react-router-dom";
import Auth from "../pages/auth/Register";
import App from "../App";
import axios from "axios";
import cookie from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../redux/userLogin";

function Navbar(props) {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)
    const onclickHandler = () => {
        setIsActive(!isActive)
    }

    const dispatch = useDispatch()

    const logOut = () =>{
        localStorage.removeItem("token")
        cookie.remove('token');
        cookie.remove('refresh')
        dispatch(removeUser())
        navigate('/auth/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
            <a className="navbar-brand" href="#">My Pomodoro</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className='nav-link-in'> <a className='nav-link'>Home</a></NavLink>
                    </li>
                    {
                        !localStorage.getItem('token') && <>
                            <li className="nav-item">
                                <NavLink to="/auth/login" className="nav-link-in" onClick={onclickHandler}> <a
                                    className={`nav-link`}>Login</a></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/auth/register" className="nav-link-in" onClick={onclickHandler}> <a
                                    className={`nav-link`}>Register</a></NavLink>
                            </li>
                        </>
                    }
                    {
                        localStorage.getItem('token') && <>
                            <li>
                                <NavLink to="/create-pomodoro" className="nav-link-in m-0 p-0">
                                    <a className="nav-link" >Create Pomodoro</a>
                                </NavLink>
                            </li>
                            <li>
                                <p className="nav-link-in m-0 p-0" onClick={logOut}>
                                    <a className="nav-link" >Log Out</a>
                                </p>
                            </li>
                        </>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
