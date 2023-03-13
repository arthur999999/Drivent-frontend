import api from './api';

export async function getBookingService(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function putBooking(token, bookingId, roomId) {
  const body = { roomId };
  const response = await api.put(`/booking/${bookingId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
