import React, {useState} from 'react';
import axios from "axios";
import UserLayout from "../../components/Layouts/UserLayout";
import FormButton from "../../components/FormButton";

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
        <UserLayout>
            <div className="signup auth container-lg pt-5">
                <div className="row pt-5">
                    <div className="col-12 w-100 d-flex flex-column justify-content-center align-items-center ms-auto me-auto">
                        <h1>Signup</h1>
                        <form onSubmit={registerSubmitHandler} className="d-flex flex-row flex-wrap justify-content-between">
                            <div className="input name m-2 ms-0 me-0">
                                <input type="text" placeholder="name" onChange={e => setName(e.target.value)}/>
                            </div>
                            <div className="input surname m-2 ms-0 me-0">
                                <input type="text" placeholder="surname" onChange={e => setSurname(e.target.value)}/>
                            </div>
                            <div className="input email m-2 ms-0 me-0">
                                <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="input username m-2 ms-0 me-0">
                                <input  type="text" placeholder="username" onChange={e => setUserName(e.target.value)}/>
                            </div>
                            <div className="input password m-2 ms-0 me-0">
                                <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="input confirm m-2 ms-0 me-0">
                                <input type="text" placeholder="confirm password" onChange={e => setConfirm(e.target.value)}/>
                            </div>
                            <div className="button w-100 d-flex justify-content-center">
                                <FormButton text="Sign Up" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Register;
