import {FormInput} from './components/activity/FormInput';
import {ActivityList} from './components/activity/ActivityList';
import {useState} from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import {StyleHeader} from './components/activity/styles/Header.styles';

const theme = {
  colors: {
    header: 'white',
    body: 'rose',
    footer: 'lightgrey',
  },
};

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
      <ThemeProvider theme={theme}>
        <StyleHeader>
          <img width={200} height={200} src="./images/logo.png" alt="logo" />
          <h1> Struct your Day</h1>
          <h2>Deine Zeit des Tages optimal genutzt!</h2>
          <h2> Einfach weil unsere Zeit zu kostbar ist</h2>
        </StyleHeader>

        <div>
          <FormInput addActivity={addActivity} />
          <ActivityList activities={activities} onHandleDelete={removeActivity} />
        </div>
      </ThemeProvider>
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
`;
