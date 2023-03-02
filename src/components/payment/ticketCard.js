import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import api from '../../services/api.js';
import useToken from '../../hooks/useToken.js';
import { useEffect, useState } from 'react';

export default function TicketCard() {
  const token = useToken();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const response = api.get('/tickets', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    response.then(res => {setTicket(res.data.TicketType);});
  }, [token]);

  return (
    <Div>
      <StyledText variant="subtitle1">{ticket.name}</StyledText>
      <StyledPrice variant="subtitle1">R$ {ticket.price},00</StyledPrice>
    </Div>
  );
}

const Div = styled.div`
    height: 108px;
    width: 290px;
    border-radius: 20px;
    background-color: #FFEED2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledText = styled(Typography)`
  color: #454545;
  font-size: 16px;
`;

const StyledPrice = styled(Typography)`
  color: #898989;   
  font-size: 14px;
`;

