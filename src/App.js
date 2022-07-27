import { FormSetDates } from "./components/activity/FormSetDates";
import { ActivityList } from "./components/activity/ActivityList";
import { useState } from "react";
import styled from 'styled-components';







export default function App() {
  // State handling of activity list
  const [activities, setActivity] = useState([]);

  const addActivity = (activity) => {
    setActivity([...activities, activity]);
  };

  return (
  <>
  
      <>
      <Header>
      <h1>Struct your Day</h1>
      </Header>
      </>
      <FormSetDates addActivity={addActivity}/>
      <h2>Deine heutigen Termine:</h2>
      <ActivityList activities={activities}/>
    
  </>
  )
};

const Header = styled.h1`
font-family: 'Cormorant SC, serif';
justify-content: center;
align-items: center;
color: salmon;
width: 100%;
height:20%;`


