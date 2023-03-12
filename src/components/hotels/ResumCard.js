import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import { getRoomWithHotelId } from '../../services/hotelApi';

export default function ResumeCard({ booking }) {
  const token = useToken();
  const [hotelWithRooms, setHotelWirhRooms] = useState({});

  let nameType; 
  if(booking.Room.capacity === 1) {
    nameType = 'Single';
  }
  if(booking.Room.capacity === 2) {
    nameType = 'Double';
  }
  if(booking.Room.capacity === 3) {
    nameType = 'Triple';
  }
  useEffect(() => {
    if (booking.Room.hotelId !== null) {
      getRoomWithHotelId(token, booking.Room.hotelId).then((res) => {
        setHotelWirhRooms(res);
      });
    }
  }, []);

  function noQuarto() {
    if( hotelWithRooms.name) {
      const quarto = hotelWithRooms.Rooms.find((m) => m.id === booking.Room.id );
      if(quarto.Booking.length === 1) {
        return 'Apenas você';
      }
      if(quarto.Booking.length === 2) {
        return 'Você e mais 1';
      }
      if(quarto.Booking.length === 3) {
        return 'Você e mais 2';
      }
    }
    return 'null';
  }  
  return(
    <Global>
      <h2>Escolha de hotel e quarto</h2>
      <p>Você já escolheu seu quarto:</p>
      <Card>
        <img src={hotelWithRooms.image} alt='foto do hotel' />
        <h2>{hotelWithRooms.name}</h2>
        <div className='desc'>
          <p>Quarto Reservado</p>
          <span>{booking.Room.name} ({nameType})</span>
        </div>
        <div className='desc'>
          <p>Pessoas no seu quarto</p>
          <span>{noQuarto()} </span>
        </div>
      </Card>
    </Global>);
};

const Global = styled.div`

  box-sizing: border-box;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
    margin-top: 36px;
  }
`;

const Card = styled.div`
  margin-top: 14px;
  width: 196px;
  height: 264px;
  background: #FFEED2;
  border-radius: 10px;
  padding-left: 14px;

  img{
    object-fit: cover;
    width: 168px;
    height: 109px;
    margin-top: 16px;
    border-radius: 5px;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin-bottom: 10px;
  }

  .desc {
    margin-bottom: 14px;
  }

  .desc p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin-top: 0px;
  }

  .desc span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }
`;
