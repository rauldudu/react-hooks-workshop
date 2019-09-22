import { apiUrl } from "../constants/constants";

export default async function fetchActivities() {
  const data = await fetch(`${apiUrl}/activities`);
  return data.json();
}
