import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[loading,setLoading]=useState(false)

    const[data,setData]=useState([])

    const login = async (e) =>{
        if (e){
            e.preventDefault()
        }
        setLoading(true)
        try{
            const response = await axios.post('https://mypomodoroapi.nijat.net/api/Account/authenticate',{
                email,password
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            setData(response.data)
            navigate("/", { replace: true });
            setLoading(false)
        }
        catch (e) {
            if(e){
                console.log(e)
                alert(e.response.data)
                setLoading(false)
            }
        }
    }

    return (
        <div className="login auth container-lg pt-5">
            <div className="row pt-5">
                <div className="col-12 w-100 d-flex flex-column justify-content-center align-items-center ms-auto me-auto">
                    <h1>Sign In</h1>
                    <form onSubmit={login} autoComplete="off" className="d-flex flex-row flex-wrap justify-content-center">
                        <input className="m-2 ms-0 me-0" required type="email"  placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                        <input className="m-2 ms-0 me-0" required type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                        <div className="button w-100 d-flex justify-content-center">
                            <button type="submit" disabled={loading}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
