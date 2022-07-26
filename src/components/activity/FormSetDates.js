import {useState} from 'react';
import styled from 'styled-components';


function FormSetDates({onAddActivity}) {
    const [activity, setActivity] = useState({
        activity: "",
        startTime: "00:00",
        endTime: "00:00",
      });

      //const AddActivity = onAddActivity(activity);
      //const SetActivity = setActivity({  activity: "", startTime: "00:00", endTime: "00:00", });

    const handleChange = (event) => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    
    onAddActivity(activity);
    setActivity({  activity: "", startTime: "00:00", endTime: "00:00", });
    };
   
    return (
        <div>
            <StyledFormWrapper>
            <form onSubmit={handleSubmit}>
                <div>
                    <StyledFormLabel>
                <label>Aktivität hinzufügen:
                    <input 
                    className="input-Activity"
                    type= "text"
                    name= "activity"
                    placeholder="Aktivität"
                    value={activity.activity} 
                    onChange={handleChange}/>
                </label>
                </StyledFormLabel>
                </div>
                
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
                        type= "time"
                        name="endTime"
                        value={activity.endTime}
                        onChange={handleChange}
                        />
                    </label>
                
                <label> Aktivität hinzufügen!
                    <button
                    type= 'submit'
                    >Jetzt 
                    Hinzufügen
                    </button>
                </label>
            </form>
            </StyledFormWrapper>
        </div>
    )
};

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 40%;
  border-color: black;
  border-width: 3px;
  border-style: double;
  border-color: black;
  background-color:lightgrey;`

  const StyledFormLabel =  styled.label`
  background-color: Black;
  border-radius: 5%;
  color: white;
  padding: 5px;
  margin: 5px;
  `
  
  





export {FormSetDates}
