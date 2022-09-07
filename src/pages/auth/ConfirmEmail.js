import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";

function ConfirmEmail(props) {
    const[params,setParams]=useSearchParams()
    const[loading,setLoading]=useState(true)

    const confirmEmail = async () =>{
        try{
            await axios.post('https://mypomodoroapi.nijat.net/api/Account/confirmemail',{
                "email":params.get("email"),
                "code":params.get("amp;code")
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            setLoading(false)
        }
        catch (e) {
            if(e){
                console.log(e)
                alert("Error occured! Please try again later.")
            }
        }
    }

    useEffect(()=>{
        confirmEmail()
    },[])

    return (
        <div>
            <h1>succesfull</h1>
            <Link to="/auth">
                <button>continue</button>
            </Link>
        </div>
    );
}

export default ConfirmEmail;
