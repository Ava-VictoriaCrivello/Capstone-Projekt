import {useState} from 'react';

function ToDos(props) {
  const [input, setInput] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    props.addTodo(input);
    setInput('');
  };
  return (
    <div>
      <h1>ToDo Liste</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setInput(e.target.value)} placeholder="Deine Todo's"></input>
        <button type="submit">Todo Hinzufügen</button>
      </form>
    </div>
  );
}

export {ToDos};
