import { getBookingService } from '../../services/bookingApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export function getBooking() {
  const token = useToken();

  const booking = useAsync(() => getBookingService(token));

  return(booking.data);
};
