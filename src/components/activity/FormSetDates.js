import {useState} from 'react';
import styled from 'styled-components';



function FormSetDates({AddActivity}) {
    const [activity, setActivity] = useState({
        activity: "",
        startTime: "00:00",
        endTime: "00:00",
      });
      
    const handleChange = (event) => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
      };
    
    const handleSubmit = (event) => {
    event.preventDefault();
    
    AddActivity(activity);
    setActivity({  activity: "", startTime: "00:00", endTime: "00:00", });
    };
   
    return (
        
        <div>
            <FormWrapper>
                <>
                <H2Heading>
                <h2> Notiere deine Termine</h2>
                </H2Heading>
                </>
            <form onSubmit={handleSubmit}>
            <div>
                <InputCard>
                <div>
                    <FormInputActivity>
                        
                <label>
                    <FormLabels>
                    Aktivität hinzufügen:
                    </FormLabels>
                <div>
                    <input 
                    className="input-Activity"
                    type= "text"
                    name= "activity"
                    placeholder="Aktivität"
                    value={activity.activity} 
                    onChange={handleChange}/>
                 </div>
                 </label>
                 </FormInputActivity>
                </div>
                <FormInputTime>
                <div>
                    <label>
                        <FormLabels>
                        Zeit von:
                        </FormLabels>
                        <input 
                        className="input-startTime"
                        type= "time"
                        name= "startTime"
                        value={activity.startTime}
                        onChange={handleChange}
                        />
                    </label>
                    </div>
                    </FormInputTime>
                    <FormInputTime>
                    <div>
                    <label>
                        <FormLabels>
                        Zeit bis:
                        </FormLabels>
                        <input 
                        type= "time"
                        name="endTime"
                        value={activity.endTime}
                        onChange={handleChange}
                        />
                    </label>
                    </div>
                    </FormInputTime>
                    <FormInputActivity>
                <div>
                <label> 
                    <FormLabels>
                    <>
                    Aktivität hinzufügen!
                    </>
                    </FormLabels>
                    <>
                    <FormButton>
                    <button
                    type= 'submit'
                    >Jetzt 
                    Hinzufügen
                    </button>
                    </FormButton>
                    </>
                </label>
                </div>
                </FormInputActivity>
                </InputCard>
                </div>
            </form>
            </FormWrapper>
        </div>

    )
}

const FormWrapper = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex: 1 0 50%;
height: 180px;
flex-wrap: wrap;

min-width: 100px;
max-width: 60%;
height: auto;
flex: 1 0 30%;
border: 2px solid black;
background-color: lightgrey;`

const InputCard = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
padding: 20px;
margin: 20px;
flex-basis: 3 0 100%;`

const FormInputActivity = styled.div`
font-family:'Courier New', Courier, monospace;
background-color: white;
flex: 1 0 50%;
min-width: 40px;
padding: 20px;
border: 2px solid grey;`

const FormInputTime = styled.div`
font-family:'Courier New', Courier, monospace;
background-color: white;
flex: 1 0 50%;
min-width: 40px;
padding: 20px;
margin: 10px;
border: 2px solid salmon;`

const FormButton = styled.button`
background-color: salmon;
width: 60%;
height: 25%;
margin: 20px;
padding: 10px;
border-radius: 25px;
`
const FormLabels = styled.label`
color: black;
font-size:x-large;
font-family: 'Cormorant SC', serif;
padding: 15px;
`
const H2Heading = styled.h2`
font-family: 'Cormorant SC, serif';
font-size:smaller;`





export {FormSetDates}
