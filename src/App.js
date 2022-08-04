import styled from 'styled-components';
import {Navbar} from './components/activity/Navbar';
import {Homepage} from './components/activity/Hompage';
import {FormAndList} from './FormAndList';
import {ToDos} from './components/activity/ToDos';
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <StyledWrapper>
      <Navbar />
      <header>
        <img width={180} height={180} src="./images/logo.png" alt="logo" />

        <h1>Structure your Day</h1>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listEntries" element={<FormAndList />} />
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
  header {
    max-width: '375';
    max-height: '667';
    background-color: #fff;
    box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;
