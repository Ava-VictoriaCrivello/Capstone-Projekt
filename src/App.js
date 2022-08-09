import styled from 'styled-components';

import {Navbar} from './components/activity/Navbar';
import {Homepage} from './components/activity/Hompage';

import {FormAndList} from './FormAndList';
import {TodoList} from './TodoList';

import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <StyledWrapper>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listEntries" element={<FormAndList />} />
        <Route path="/todos" element={<TodoList />} />
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
`;
