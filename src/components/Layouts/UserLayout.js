import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar";
import Loader from "../Loader";
import cookie from "js-cookie";
import {useNavigate} from "react-router-dom";

function UserLayout({children, loading, setLoading}) {
    const [globalLoader, setGlobalLoader] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        if (loading === true) {
            document.getElementsByTagName("html")[0].style.overflowY = "hidden"
        } else {
            document.getElementsByTagName("html")[0].style.overflowY = "unset"
        }
    }, [loading])

    let pathname = window.location.pathname

    useEffect(() => {
        if (cookie.get('token')) {
            if (pathname === '/auth/login' || pathname === "/auth/register" || pathname === "/account/confirmemail") {
                navigate('/', {replace: true})
            }
        }
    }, [pathname, cookie.get('token')])


    useEffect(() => {
        if (pathname !== "/auth/login" || pathname !== "/auth/register") {
            setGlobalLoader(false)
        }
    }, [window.location.pathname])

    return (
        globalLoader ? <Loader/> :
            <>
                {
                    loading ? <Loader/> :
                        <>
                            {window.location.pathname !== "/account/confirmemail" && <Navbar/>}
                            {children}

                            {/*{children}*/}
                        </>
                }
            </>
    );
}

export default UserLayout;
