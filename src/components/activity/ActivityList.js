import styled from "styled-components";



function ActivityList({activities}) {
    return (
      
      <div name={ListEntrie}>
        {activities.map((activity) => (
          <div key={activity.activity}>
            <p>{activity.activity}</p>
            <p>{activity.startTime}</p>
            <p>{activity.endTime}</p>
          </div>
        ))}
      </div>
     
    );
}

const ListEntrie = styled.div`
background-color: grey`

export {ActivityList};

  