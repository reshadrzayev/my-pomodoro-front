import React, {useState} from 'react';
import axios from "axios";


function Register(props) {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    const registerSubmitHandler = async (e) => {
        if (e) {
            e.preventDefault()
        }
        try {
            await axios.post('https://mypomodoroapi.nijat.net/api/Account/register', {
                name,
                surname,
                email,
                userName,
                password,
                "confirmPassword": confirm
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            alert("registered")
        } catch (e) {
            if(e){
                alert(e.response.data)
            }
        }
    }

    return (
        <div className="signup auth container-lg pt-5">
            <div className="row pt-5">
                <div className="col-12 w-100 d-flex flex-column justify-content-center align-items-center ms-auto me-auto">
                    <h1>Signup</h1>
                    <form onSubmit={registerSubmitHandler} className="d-flex flex-row flex-wrap justify-content-between">
                        <input className="name m-2 ms-0 me-0" type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
                        <input className="surname m-2 ms-0 me-0" type="text" placeholder="surname" onChange={e => setSurname(e.target.value)}/>
                        <input className="email m-2 ms-0 me-0" type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                        <input className="password m-2 ms-0 me-0" type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                        <input className="confirm m-2 ms-0 me-0" type="text" placeholder="confirm password" onChange={e => setConfirm(e.target.value)}/>
                        <input className="username m-2 ms-0 me-0" type="text" placeholder="userName" onChange={e => setUserName(e.target.value)}/>
                        <div className="button w-100 d-flex justify-content-center">
                            <button className="m-2 ms-0 me-0" type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
