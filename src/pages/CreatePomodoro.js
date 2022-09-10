import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserLayout from "../components/Layouts/UserLayout";
import cookie from "js-cookie";

function CreatePomodoro(props) {


    const [colors, setColors] = useState([])
    const [colorId, setColorId] = useState(1)
    const [pomodoroName, setPomodoroName] = useState()
    const [pomTime, setPomTime] = useState()
    const [pomShortBreak, setPomShortBreak] = useState()
    const [pomLongBreak, setPomLongBreak] = useState()
    const [pomLongInterval, setPomLongInterval] = useState()
    const [periodCount, setPeriodCount] = useState()

    const getColors = async () => {
        try {
            const response = await axios.get('https://mypomodoroapi.nijat.net/api/Pomodoro/PomodoroColors', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
            setColors(response.data)
        } catch (e) {
            if (e) {
                console.log(e)
            }
        }
    }

    useEffect(() => {
        getColors()
        console.log(colors)
    }, [])

    // useEffect(()=>{
    //     console.log(colorId)
    // })

    const createPomodoro = async (e) => {
        if(e){
            e.preventDefault()
        }
        try {
            const response = await axios.post('https://mypomodoroapi.nijat.net/api/Pomodoro/CreatePomodoro', {
                "name": pomodoroName,
                "pomodoroTime": pomTime,
                "shortBreakTime": pomShortBreak,
                "longBreakTime": pomLongBreak,
                "longBreakInterval": pomLongInterval,
                "periodCount": periodCount,
                "color": colorId
            }, {
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch (e) {
            if (e) {
                console.log(e)
                alert('err')
            }
        }
    }

    return (
        <UserLayout>
            <div className="container create-pomodoro">
                <h1>Create your pomodoro</h1>
                <form onSubmit={createPomodoro}>
                    <input type="text" placeholder="pomodoro name"
                           onChange={e => e && setPomodoroName(e.target.value)}/>
                    <input type="number" placeholder="pomodoro time (min)"
                           onChange={e => e && setPomTime(e.target.value)}/>
                    <input type="number" placeholder="short break time (min)"
                           onChange={e => e && setPomShortBreak(e.target.value)}/>
                    <input type="number" placeholder="long break time (min)"
                           onChange={e => e && setPomLongBreak(e.target.value)}/>
                    <input type="number" placeholder="long break interval"
                           onChange={e => e && setPomLongInterval(e.target.value)}/>
                    <input type="number" placeholder="period count"
                           onChange={e => e && setPeriodCount(e.target.value)}/>
                    <select name="" id="" onChange={(e) => {
                        setColorId(e.target.value)
                    }}>
                        {
                            colors.map((color, index) => {
                                return (
                                    <option key={index} value={color.id}>
                                        Background: {color.bgColor} Text: {color.txtColor}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <button type="submit">Create</button>
                </form>
            </div>
        </UserLayout>
    );
}

export default CreatePomodoro;
