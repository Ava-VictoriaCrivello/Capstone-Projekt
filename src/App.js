import { FormInput } from "./components/activity/FormInput";
import { ActivityList } from "./components/activity/ActivityList";
import { useState } from "react";
import styled from 'styled-components'
import { ThemeProvider } from "styled-components";
import { StyleHeader,Nav } from "./components/activity/styles/Header.styles";
import { FormStyles } from "./components/activity/styles/FormInput.styles";


const theme = {
  colors: {
    header: 'white',
    body:   'rose',
    footer: 'lightgrey'
  }
}


export default function App() {
  // State handling of activity list
  const [activities, setActivity] = useState([]);

  const addActivity = (activity) => {
    setActivity([...activities, activity]);
  };

  return (
    <ThemeProvider theme = {theme}>
      <StyledWrapper>
      <Nav>
      <img width={200}
       height={200}
       src="./images/logo.png" alt="logo"/>
       <h1> Struct your Day</h1>
      </Nav>
      <StyleHeader>
        <h2>Deine Zeit des Tages optimal genutzt!</h2>
        <h2> Einfach weil unsere Zeit zu kostbar ist</h2>
    </StyleHeader>
      <FormStyles>
      <FormInput addActivity={addActivity}/>
      </FormStyles>
      <ActivityList activities={activities}/>
      </StyledWrapper>
      </ThemeProvider>
  );
}

//<div>
//<FormInput addActivity={addActivity}/>
//<ActivityList activities={activities}/>
//</div>

const StyledWrapper = styled.main`
max-width: 860px;
margin: 0;
padding: 25px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`


