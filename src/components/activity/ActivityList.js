import styled from 'styled-components';

function ActivityList({activities, onHandleDelete}) {
  const handleDelete = event => {
    const activityId = event.target.dataset.id;
    onHandleDelete(activityId);
  };
  return (
    <>
      <div>
        <label>Aufgaben des Tages</label>
      </div>
      {activities.map(activity => (
        <div key={activity.id}>
          <StyledActivitiList>
            <label>Dein Tag:</label>
            <p>{activity.activity}</p>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
            <StyledButton onClick={handleDelete} data-id={activity.id}>
              Eintrag löschen
            </StyledButton>
          </StyledActivitiList>
        </div>
      ))}
    </>
  );
}

const StyledActivitiList = styled.div`
  max-width: '375';
  max-height: '667';
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  color: #fff;
  text-transform: capitalize;
  padding: 16px;
  border: none;

  cursor: pointer;
  outline: none;
  background: linear-gradient(90deg, rgba(226, 161, 161) 0%, rgba(187, 129, 129) 100%);
`;

export {ActivityList};
