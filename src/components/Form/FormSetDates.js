import {useState} from 'react';


    function FormSetDates() {
    const [activity, setActivity] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    const handleSubmit = (event) => {
        event.preventDefault();
       
    }

    const handleChange = (event) => {
        const activity = event.target.activity;
        const time = event.target.time;
        const value= event.taget.value;
        setActivity(values => ({value,[activity]: value}))
        setStartTime(value => ({value,[time]: value}))
        setEndTime(value => ({value, [time]: value}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Aktivität hinzufügen:
                <input 
                type= "text"
                value={activity}
                onChange={handleChange}
                />
            </label>
            <label>Zeit von:
                <input 
                type= "time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                />
            </label>
            <label>Zeit bis:
                <input 
                type= "time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                />
            </label>
        </form>
    )
}

export  {FormSetDates}
