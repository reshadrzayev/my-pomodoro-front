import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader";
import UserLayout from "../../components/Layouts/UserLayout";
import FormButton from "../../components/FormButton";
import { useNavigate } from "react-router-dom";

function ConfirmEmail(props) {
    const[params,setParams]=useSearchParams()
    const[loading,setLoading]=useState(true)
    const navigate = useNavigate();

    const confirmEmail = async () =>{
        // setLoading(true)
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
                // alert("Error occured! Please try again later.")
                navigate("/auth/register", { replace: true });
            }
        }
    }

    useEffect(()=>{
        confirmEmail()
    },[])

    return (
        <UserLayout loading={loading} setLoading={setLoading}>
              <div className="container confirm-email d-flex justify-content-center align-items-center">
                 <div className="row d-flex flex-column pb-5 mb-5">
                     <h1>Your email confirmed successfully!</h1>
                     <Link to="/auth/login">
                         <FormButton text="Continue" type="button" loading={loading}/>
                     </Link>
                 </div>
              </div>
          </UserLayout>
    );
}

export default ConfirmEmail;
