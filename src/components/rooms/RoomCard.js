import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

export default function RoomCard({ room, roomChoosed, setRoomChoosed }) {
  let [users, setUsers] = useState(Array(room.capacity).fill(<AiOutlineUser></AiOutlineUser>));

  if (room.Booking.length === room.capacity) {
    return (
      <Card bgColor={'#E9E9E9'}>
        <Name>{room.name}</Name>
        <Users>{Array(room.capacity).fill(<FaUser></FaUser>)}</Users>
      </Card>
    );
  }

  if (room.Booking.length !== 0 && room.Booking.roomId === room.id) {
    const indiceOcupado = users.indexOf(<AiOutlineUser></AiOutlineUser>);
    users = users.splice(indiceOcupado === -1 ? users.length - 1 : indiceOcupado, 1, <FaUser></FaUser>);
  }

  if (roomChoosed === room.id) {
    users.splice(users.indexOf(<AiOutlineUser></AiOutlineUser>), 1, <FaUser style={{ color: 'red' }}></FaUser>);
  } else {
    users.splice(users.indexOf(<FaUser style={{ color: 'pink' }}></FaUser>), 1, <AiOutlineUser></AiOutlineUser>);
  }

  return (
    <Card onClick={() => setRoomChoosed(room.id)} bgColor={roomChoosed === room.id ? '#FFEED2' : 'white'}>
      <Name>{room.name}</Name>
      <Users>{users.map((user) => user)}</Users>
    </Card>
  );
}

const Card = styled.div`
  width: 190px;
  height: 45px;
  border: 1px solid #cecece;
  border-radius: 10px;
  background: ${(props) => props.bgColor};
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const Users = styled.div`
  display: flex;
`;
const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
`;
