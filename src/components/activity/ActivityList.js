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
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0.25rem 0;
  background: whitesmoke;
  margin: 5px;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border: 10px solid;
  color: black;
  border: 0;
  width: auto;
  padding: 6px 10px;
  margin: 10px 0;
`;

const StyledButton = styled.button`
  background: grey;
  color: #fff;
  border: 0;
  border-radius: 8px;
  border-style: solid;
  width: 180px;
  padding: 6px 10px;
  margin: 10px 0;
`;

export {ActivityList};
