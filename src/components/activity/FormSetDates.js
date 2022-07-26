import {useState} from 'react';

function FormSetDates({onAddActivity}) {
    const [activity, setActivity] = useState({
        activity: "",
        startTime: "00:00",
        endTime: "00:00",
      });

      const AddActivity = onAddActivity(activity);
      const SetActivity = setActivity({  activity: "", startTime: "00:00", endTime: "00:00", });

    const handleChange = (event) => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    
    onAddActivity(activity);
    setActivity({  activity: "", startTime: "00:00", endTime: "00:00", });
    };
   
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>Aktivität hinzufügen:
                    <input 
                    className="input-Activity"
                    type= "text"
                    name= "activity"
                    placeholder="Aktivität"
                    value={activity.activity} 
                    onChange={handleChange}/>
                </label>
                <div className="input-time--Form">
                    <label>Zeit von:
                        <input 
                        className="input-startTime"
                        type= "time"
                        name= "startTime"
                        value={activity.startTime}
                        onChange={handleChange}
                        />
                    </label>
                    <label>Zeit bis:
                        <input 
                        className="input-endTime"
                        type= "time"
                        name="endTime"
                        value={activity.endTime}
                        onChange={handleChange}
                        />
                    </label>
                </div>
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

export {FormSetDates}
