import { FormSetDates } from "./components/activity/FormSetDates";
import { ActivityList } from "./components/activity/ActivityList";
import { useState } from "react";






export default function App() {
  // State handling of activity list
  const [activities, setActivity] = useState([]);

  const addActivity = (activity) => {
    setActivity([...activities, activity]);
  };

  return (
  <>
  
      
      <h1>Struct your Day</h1>
      <FormSetDates addActivity={addActivity}/>
      <h2>Deine heutigen Termine:</h2>
      <ActivityList activities={activities}/>
    
  </>
  )
};


