import { getTicketsType } from '../../services/ticketApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useTicktTypes() {
  const token = useToken();

  const ticket = useAsync(() => getTicketsType(token));

  return(ticket.data);
}
