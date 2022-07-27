function ActivityList({activities}) {
    return (
      <div>
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

export {ActivityList};

  