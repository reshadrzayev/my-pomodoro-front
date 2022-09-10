import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserLayout from "../../components/Layouts/UserLayout";
import FormButton from "../../components/FormButton";
import cookie from 'js-cookie'

function Login(props) {
    const navigate = useNavigate();
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[loader,setLoader]=useState(false)

    const[data,setData]=useState([])

    const login = async (e) =>{
        if (e){
            e.preventDefault()
        }
        setLoader(true)
        try{
            const response = await axios.post('https://mypomodoroapi.nijat.net/api/Account/authenticate',{
                email,password
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            setData(response.data)
            cookie.set('token',response.data.jwt.token)
            cookie.set('refresh',response.data.refreshToken.token)
            alert("logged in")
            navigate("/", { replace: true });
            setLoader(false)
        }
        catch (e) {
            if(e){
                console.log(e)
                alert(e.response.data)
                setLoader(false)
            }
        }
    }

    return (
        <UserLayout>
            <div className="login auth container-lg pt-5">
                <div className="row pt-5">
                    <div className="col-12 w-100 d-flex flex-column justify-content-center align-items-center ms-auto me-auto">
                        <h1>Sign In</h1>
                        <form onSubmit={login} autoComplete="off" className="d-flex flex-row flex-wrap justify-content-center">
                            <div className="input m-2 ms-0 me-0">
                                <input required type="email"  placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div className="input m-2 ms-0 me-0">
                                <input required type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                            <div className="button w-100 d-flex justify-content-center">
                                {/*<button type="submit" disabled={loading}>Sign In</button>*/}
                                <FormButton text="Sign In" loading={loader} type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Login;
