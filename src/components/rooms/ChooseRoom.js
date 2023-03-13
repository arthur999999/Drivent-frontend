import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import RoomCard from './RoomCard';

export default function ChooseRoom({ hotelRooms, roomChoosed, setRoomChoosed }) {
  return (
    <>
      <StyledSubtitle variant="subtitle1">Ótima pedida! Agora escolha seu quarto:</StyledSubtitle>
      <Container>
        {hotelRooms.map((room, idx) => (
          <RoomCard key={idx} room={room} roomChoosed={roomChoosed} setRoomChoosed={setRoomChoosed}></RoomCard>
        ))}
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  cursor: pointer;
`;
const StyledSubtitle = styled(Typography)`
  margin-top: 30px !important;
  margin-bottom: 10px !important;
  color: #8e8e8e;
`;
