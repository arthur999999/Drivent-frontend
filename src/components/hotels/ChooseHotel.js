import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelCard from './HotelCard';
import useToken from '../../hooks/useToken.js';
import { useEffect, useState } from 'react';
import { getHotels, getRoomWithHotelId } from '../../services/hotelApi';
import ChooseRoom from '../rooms/ChooseRoom';

export default function ChooseHotel({ hotelId, setHotelId, roomChoosed, setRoomChoosed, reservarQuarto, booking }) {
  const token = useToken();
  const [hotels, setHotel] = useState(null);
  const [hotelRooms, setHotelRooms] = useState(null);

  useEffect(() => {
    const res = getHotels(token);
    res.then((res) => {
      setHotel(res);
    });

    if (hotelId !== null) {
      getRoomWithHotelId(token, hotelId).then((res) => {
        setHotelRooms(res.Rooms);
      });
    }
  }, [token, hotelId]);

  return (
    <>
      <StyledTypography variant="h4">Escolha hotel e quarto</StyledTypography>
      <StyledSubtitle variant="subtitle1">Primeiro, escolha o seu hotel:</StyledSubtitle>
      <Container>
        {hotels ? (
          hotels.map((data) => <HotelCard data={data} key={data.id} hotelId={hotelId} setHotelId={setHotelId} />)
        ) : (
          <></>
        )}
      </Container>
      {hotelRooms ? (
        <ChooseRoom hotelRooms={hotelRooms} roomChoosed={roomChoosed} setRoomChoosed={setRoomChoosed}></ChooseRoom>
      ) : (
        <></>
      )}
      {roomChoosed ? <ReserveRoom onClick={() => reservarQuarto(booking)}>RESERVAR QUARTO</ReserveRoom> : ''}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;

const StyledSubtitle = styled(Typography)`
  margin-bottom: 17px !important;
  color: #8e8e8e;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  cursor: pointer;
`;

const ReserveRoom = styled.button`
  width: 182px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin: 30px 0;
  border: 0px;
  cursor: pointer;
`;
