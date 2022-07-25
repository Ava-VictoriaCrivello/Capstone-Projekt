import {useState} from 'react';

    function FormSetDates() {
    const [activity, setActivity] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    return (
        <form>
            <div className='form-container'>
            <label>Aktivität hinzufügen:
                <input 
                type= "text"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
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
            </div>
        </form>
    )
}
export  {FormSetDates}
