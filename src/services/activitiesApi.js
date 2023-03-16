import api from './api';

export async function getActivitiesByDate(token, date) {
  const response = api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
