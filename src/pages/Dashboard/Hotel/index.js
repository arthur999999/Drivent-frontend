import { useState, useEffect } from 'react';
import ChooseHotel from '../../../components/hotels/ChooseHotel';
import ForbiddenMessage from '../../../components/hotels/ForbiddenMessage';
import useToken from '../../../hooks/useToken';
import { getTicket } from '../../../services/ticketApi';

export default function Hotel() {
  const token = useToken();
  const [ticket, setTicket] = useState({ status: 'RESERVED' });
  const [hotelId, setHotelId] = useState(null);

  useEffect(() => {
    getTicket(token).then((data) => {
      setTicket(data);
    });
  }, []);

  return (
    <>
      {
        ticket.status === 'PAID' 
          ? ticket.TicketType.includesHotel 
            ? <ChooseHotel hotelId= { hotelId } setHotelId={ setHotelId }/>
            : <ForbiddenMessage message="Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades"/> 
          : <ForbiddenMessage message="Você precisa confirmar o pagamento antes de fazer a escolha de hospedagem"/>
      }
    </>
  );
}
