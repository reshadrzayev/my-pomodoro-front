import React, {useEffect} from 'react';
import {Link,useSearchParams} from "react-router-dom";
import Auth from "../pages/auth/Register";
import App from "../App";
import axios from "axios";

function Navbar(props) {


    return (
        <div className="container">
            <Link to="/auth/register">Register</Link>
            <Link to="/auth/login">Login</Link>
            <Link to="/">Home</Link>
            <Link to="/account/confirmemail"/>
        </div>
    );
}

export default Navbar;
