import { useState, useEffect } from 'react';
import ChooseHotel from '../../../components/hotels/ChooseHotel';
import ForbiddenMessage from '../../../components/hotels/ForbiddenMessage';
import useToken from '../../../hooks/useToken';
import { getTicket } from '../../../services/ticketApi';
import { postBooking } from '../../../services/hotelApi';
import { putBooking } from '../../../services/bookingApi';
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
  const [changeRoom, setChangeRoom] = useState();

  useEffect(() => {
    getBookingService(token)
      .then((data) => {
        setBooking(data);
      })
      .catch((err) => {
        toast(err.message);
      });

    getTicket(token).then((data) => {
      setTicket(data);
    });
  }, [reload]);

  function reservarQuarto(booking) {
    if (!booking) {
      postBooking(token, roomChoosed)
        .then((res) => {
          toast('Quarto reservado com sucesso!!!');
          setReload([...reload, 2]);
        })
        .catch((e) => {
          toast(e.message);
        });
    } else {
      putBooking(token, booking.id, roomChoosed)
        .then((res) => {
          toast('Quarto alterado com sucesso!!!');
          setBooking(null);
          setReload([...reload, 3]);
          setChangeRoom(null);
        })
        .catch((e) => {
          toast(e.message);
        });
    }
  }

  if (booking && !changeRoom) {
    return <ResumeCard booking={booking} setChangeRoom={setChangeRoom} />;
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
      <ChooseHotel
        hotelId={hotelId}
        setHotelId={setHotelId}
        roomChoosed={roomChoosed}
        setRoomChoosed={setRoomChoosed}
        reservarQuarto={reservarQuarto}
        booking={booking}
      />
    </>
  );
}
