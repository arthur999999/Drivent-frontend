import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function PaymentConfirm({ ticketData }) {
  return (
    <TypeOfTicket>
      <MainDescription>Ingresso e pagamento</MainDescription>
      <MainTitle>Ingresso escolhido</MainTitle>
      <PaymentBox>
        <p>
          {ticketData && ticketData.TicketType.name}
          {ticketData && ticketData.TicketType.includesHotel && ' + Com hotel'}
        </p>
        <h1>{ticketData && 'R$' + ticketData.TicketType.price}</h1>
      </PaymentBox>
      <MainTitle>Pagamento</MainTitle>
      <PaymentCheck>
        <CheckGreen />
        <PaymentText>
          <h1>Pagamento confirmado!</h1>
          <p>Prossiga para escolha de hospedagem e atividades</p>
        </PaymentText>
      </PaymentCheck>
    </TypeOfTicket>
  );
}

const TypeOfTicket = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
`;

const MainDescription = styled.h1`
  width: 338px;
  height: 40px;
  margin-bottom: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  color: #000000;
`;

const MainTitle = styled.h1`
  width: 409px;
  height: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #8e8e8e;
`;

const PaymentBox = styled.div`
  width: 290px;
  box-sizing: border-box;
  padding: 20px;
  text-align: center; 
  height: 108px;
  background: #ffeed2;
  border-radius: 20px;
  margin-top: 2%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    color: #454545;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 16px;
  }
  h1 {
    color: #898989;
    font-size: 14px;
    font-weight: 400;
  }
`;

const PaymentCheck = styled.div`
  margin-top: 2%;
  display: flex;
`;

const PaymentText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 14px;
  font-size: 15px;
  h1 {
    font-weight: 700;
  }
`;

const CheckGreen = styled(AiFillCheckCircle)`
  font-size: 45px;
  color: #36b853;
`;
