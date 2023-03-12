import api from './api';

export async function getHotels(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getRoomWithHotelId(token, hotelId) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postBooking(token, roomId) {
  await api.post('/booking', {
    roomId
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  );
}
