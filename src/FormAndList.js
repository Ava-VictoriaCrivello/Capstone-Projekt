import {FormInput} from './components/activity/FormInput';
import {ActivityList} from './components/activity/ActivityList';
import {useState} from 'react';

function FormAndList() {
  const [activities, setActivity] = useState([]);
  const addActivity = activity => {
    setActivity([...activities, activity]);
  };
  const removeActivity = activity => {
    setActivity(current => current.filter(obj => obj.id !== activity));
  };
  return (
    <div>
      <h1> Einträge</h1>
      <FormInput addActivity={addActivity} />
      <ActivityList activities={activities} onHandleDelete={removeActivity} />
    </div>
  );
}

export {FormAndList};
