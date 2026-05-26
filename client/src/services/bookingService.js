import api from './api';

export const submitBooking = async (booking) => {
  const response = await api.post('/bookings', booking);
  return response.data;
};

export const fetchBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};

export const updateBooking = async (id, payload) => {
  const response = await api.put(`/bookings/${id}`, payload);
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await api.delete(`/bookings/${id}`);
  return response.data;
};
