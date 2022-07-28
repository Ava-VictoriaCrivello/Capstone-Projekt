import {useState} from 'react';





    function FormInput() {
    const [activity, setActivity] = useState("");
    const [startTime, setStartTime] = useState("00:00");
    const [endTime, setEndTime] = useState("00:00");

    function handleSubmit(event){
        event.preventDefault();
        const form = event.target;
        const {activity, startTime, endTime} = form.elements;
        setActivity(activity.value);
        setStartTime(startTime.value);
        setEndTime(endTime.value);

       
    }

   
    return (
        
        
        <form onSubmit={handleSubmit}>
            <label>Aktivität hinzufügen:
            
                <input 
                type= "text"
                value={activity}
                onChange= {(e) => setActivity(e.target.value)} />
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
            <label> Aktivität hinzufügen!
            <div>
                <button
                type= 'submit'
                >Jetzt 
                Hinzufügen
                </button>
                </div>
            </label>
        </form>
        
    )
}

export  {FormInput}
