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
    <StyledTodoForm onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input value={input} onChange={handleChange} name="text" ref={inputRef} className="todo-input edit" />
          <button onClick={handleSubmit} >
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
            
            ref={inputRef}
          />
          <button onClick={handleSubmit}>
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
    width: 200px;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  button {
    color: #fff;
    text-transform: capitalize;
    padding: 16px;
    border: none;
    gap: 20%;
    cursor: pointer;
    outline: none;
    background: linear-gradient(90deg, rgba(226, 161, 161) 0%, rgba(187, 129, 129) 100%);
  }
`;

export {TodosForm};
