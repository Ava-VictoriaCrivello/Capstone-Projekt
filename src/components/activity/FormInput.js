import {useState} from 'react';
import {FormStyles} from './styles/FormInput.styles';
import {nanoid} from 'nanoid';

function FormInput({addActivity}) {
  const [activity, setActivity] = useState({
    id: nanoid(),
    activity: '',
    startTime: '00:00',
    endTime: '00:00',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    addActivity(activity);
    setActivity({id: nanoid(), activity: '', startTime: '00:00', endTime: '00:00'});
  }

  const handleChange = event => {
    setActivity({...activity, [event.target.name]: event.target.value});
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <label>
        Aktivität hinzufügen:
        <input type="text" name="activity" value={activity.activity} onChange={handleChange} />
      </label>
      <label>
        Zeit von:
        <input type="time" name="startTime" value={activity.startTime} onChange={handleChange} />
      </label>
      <label>
        Zeit bis:
        <input type="time" name="endTime" value={activity.endTime} onChange={handleChange} />
      </label>
      <label>
        {' '}
        Aktivität hinzufügen!
        <div>
          <button type="submit">Jetzt Hinzufügen</button>
        </div>
      </label>
    </FormStyles>
  );
}

export {FormInput};
