import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import App from './App';
import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";

import './assets/styles/style.scss'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ConfirmEmail from "./pages/auth/ConfirmEmail";
import Login from "./pages/auth/Login";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*{window.location.pathname === "/" && <Link to="/">Home</Link>}*/}
        <Routes>
            <Route exact={true} path="/" element={<App/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/account/confirmemail" element={<ConfirmEmail/>}/>
        </Routes>
    </BrowserRouter>

);


