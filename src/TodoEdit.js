import {useState} from 'react';
import {TodosForm} from './TodosForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import styled from 'styled-components';

function TodoEdit({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodosForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <StyledComplete className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <aside key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </aside>
      <span>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </span>
    </StyledComplete>
  ));
}

const StyledComplete = styled.div`
  max-width: '375';
  max-height: '667';

  padding: 1rem;
  margin-bottom: 1rem;
  border: none;
  border-style: solid;
  cursor: pointer;
  outline: none;
  background: linear-gradient(90deg, rgba(126, 119, 119) 0%, rgba(179, 143, 143) 100%);
  color: #fff;
  text-transform: capitalize;

  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto;
    color: #fff;

    padding: 16px;
    border-radius: 5px;
    width: 90%;
  }

  span {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    margin-top: 1rem;
    padding-top: 1rem;
    list-style-type: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

export {TodoEdit};
