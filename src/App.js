import {FormInput} from './components/activity/FormInput';
import {ActivityList} from './components/activity/ActivityList';
import {useState} from 'react';
import styled from 'styled-components';

import {Navbar} from './components/activity/Navbar';
import {Homepage} from './components/activity/Hompage';

import {ToDos} from './components/activity/ToDos';
import {Route, Routes} from 'react-router-dom';

export default function App() {
  const [activities, setActivity] = useState([]);

  const addActivity = activity => {
    setActivity([...activities, activity]);
  };
  const removeActivity = activity => {
    console.log(activity);
    setActivity(current => current.filter(obj => obj.id !== activity));
  };

  return (
    <StyledWrapper>
      <Navbar>
        <img width={130} height={130} src="./images/logo.png" alt="logo" />
      </Navbar>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listEntries" element={<FormInput addActivity={addActivity} />} />
        <Route path="/listEntries" element={<ActivityList activities={activities} onHandleDelete={removeActivity} />} />
        <Route path="/Calendar" element={<ToDos />} />
      </Routes>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  max-width: 860px;
  margin: 0;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  main {
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 1rem;
  }
  img {
    text-align: center;
  }
  h1 {
    color: black;
    text-align: center;
    font-size: medium;
  }
  h2 {
    color: black;
    text-align: center;
    font-size: small;
  }
`;
