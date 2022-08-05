import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

function TodosForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <StyledTodoForm onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input value={input} onChange={handleChange} name="text" ref={inputRef} className="todo-input edit" />
          <button onClick={handleSubmit} className="todo-button edit">
            Updates deines todos
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Todo hinzufügen"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Todo Hinzufügen
          </button>
        </>
      )}
    </StyledTodoForm>
  );
}

const StyledTodoForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: '375';
  max-height: '667';
  background: white;
  text-align: center;
  margin: auto;
  border-radius: 10px;
  padding-bottom: 32px;

  input {
    padding: 14px 32px 14px 16px;
    border-radius: 4px 0 0 4px;
    border: 2px solid;
    outline: none;
    width: 320px;
    background: transparent;
    color: black;
    gap: 20px;
  }

  button {
    color: #fff;
    text-transform: capitalize;
    padding: 16px;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    outline: none;
    background: linear-gradient(90deg, rgba(226, 161, 161) 0%, rgba(187, 129, 129) 100%);
  }
`;

export {TodosForm};
