import React from "react";
import Spinner from "../Spinner/Spinner";
import fetchActivities from "../../api/fetchActivities";

import "./Activities.scss";

export default function Activities() {
  const [activities, setActivities] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchActivities().then(res => {
      setActivities(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="activities">
      <h2>Activities</h2>
      {activities.length === 0 ? (
        <h4>No activities!</h4>
      ) : (
        <table>
          <tbody>
            <tr>
              <th>Page</th>
              <th>Type</th>
              <th>Date</th>
            </tr>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.page}</td>
                <td>{activity.type}</td>
                <td>{activity.date.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
