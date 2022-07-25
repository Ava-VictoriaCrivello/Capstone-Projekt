import {useState} from 'react';


    function FormSetDates() {
    const [activity, setActivity] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const { activity, startTime, endTime} = form.elements;
        setActivity(activity.value);
        setStartTime(startTime.value);
        setEndTime(endTime.value);

       
    }

   
    return (
        <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <label>Aktivität hinzufügen:
                <input 
                className="input-Activity"
                type= "text"
                value={activity}
                onChange= {(e) => setActivity(e.target.value)} />
            </label>
            <label>Zeit von:
                <input 
                className="input-startTime"
                type= "time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                />
            </label>
            <label>Zeit bis:
                <input 
                className="input-endTime"
                type= "time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                />
            </label>
            <label> Aktivität hinzufügen!
                <button
                type= 'submit'
                className= 'submit-Button--Form'>Jetzt 
                Hinzufügen
                </button>
            </label>
        </form>
        </div>
        
    )
}

export  {FormSetDates}
