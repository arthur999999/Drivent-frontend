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

export async function postSubscriptionService(token, activityId) {
  const response = await api.post(`/activities/${activityId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
