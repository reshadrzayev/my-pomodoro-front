import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import ConfirmEmail from "./pages/auth/ConfirmEmail";
import React from "react";
import CreatePomodoro from "./pages/CreatePomodoro";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<App/>}/>
                <Route path="/auth/register" element={<Register/>}/>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/account/confirmemail" element={<ConfirmEmail/>}/>
                <Route path="/create-pomodoro" element={<CreatePomodoro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
