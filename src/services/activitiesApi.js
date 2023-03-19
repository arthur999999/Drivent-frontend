import api from './api';

export async function getActivitiesByDate(token, date) {
  const response = await api.get(`/activities/${date}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesDates(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
