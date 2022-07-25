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
        setStartTime(value => ({value,[startTime]: value}))
        setEndTime(value => ({value, [endTime]: value}))
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
                onChange={handleChange}
                />
            </label>
            <label>Zeit bis:
                <input 
                type= "time"
                value={endTime}
                onChange={handleChange} 
                />
            </label>
            <button
            type='submit'
            className= 'submit-Button--Form'>
                Aktivität Hinzufügen!

            </button>
        </form>
        
    )
}

export  {FormSetDates}
