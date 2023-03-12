import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChooseHotel from '../../../components/hotels/ChooseHotel';
import ForbiddenMessage from '../../../components/hotels/ForbiddenMessage';
import useToken from '../../../hooks/useToken';
import { getTicket } from '../../../services/ticketApi';
import { postBooking } from '../../../services/hotelApi';
import { toast } from 'react-toastify';
import { getBookingService } from '../../../services/bookingApi';
import ResumeCard from '../../../components/hotels/ResumCard';

export default function Hotel() {
  const token = useToken();
  const [ticket, setTicket] = useState({ status: 'RESERVED' });
  const [hotelId, setHotelId] = useState(null);
  const [roomChoosed, setRoomChoosed] = useState(null);
  const [booking, setBooking] = useState(null);
  const [reload, setReload] = useState([1]);

  useEffect(() => {
    getTicket(token).then((data) => {
      setTicket(data);
    });
  }, []);

  useEffect(() => {
    getBookingService(token).then((data) => {
      setBooking(data);
    }).catch((e) => {

    });
  }, [reload]);
  
  if(booking) {
    return ( <ResumeCard booking={booking}/>);
  }

  function reservarQuarto() {
    postBooking(token, roomChoosed).then((res) => {
      console.log(res);
      toast('Ticket reservado com sucesso!!!');
      setReload([...reload, 2]);
    }).catch((e) => {
      toast(e.message);
      console.log(e);
    });
  }

  if (ticket.status !== 'PAID') {
    return <ForbiddenMessage message="Você precisa confirmar o pagamento antes de fazer a escolha de hospedagem" />;
  } 
  if (!ticket.TicketType.includesHotel) {
    return (
      <ForbiddenMessage message="Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades" />
    );
  }

  return (
    <>
      <ChooseHotel hotelId={hotelId} setHotelId={setHotelId} roomChoosed={roomChoosed} setRoomChoosed={setRoomChoosed} reservarQuarto={reservarQuarto} />
    </>
  );
}
