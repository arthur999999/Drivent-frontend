import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Check from './checkBox';
import { useState } from 'react';
import { getTicket } from '../../../services/ticketApi';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { useEffect } from 'react';
import PaymentConfirm from './paymentConfirm';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [ticketType, setTicketType] = useState({ price: undefined, isRemote: undefined });
  const [isPaid, setIsPaid] = useState(false);
  const [ticketData, setTicketData] = useState();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getTicket(userData.token).then((data) => {
      data.status === 'PAID' && setIsPaid(true);
      setTicketData(data);
    });
  }, []);

  if (!enrollment)
    return (
      <ContainerWithoutEnrollment>
        <MainDescription>Ingresso e pagamento</MainDescription>
        <NoEnrollment>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </NoEnrollment>
      </ContainerWithoutEnrollment>
    );

  return (
    <Container>
      {ticketData && isPaid ? (
        <PaymentConfirm ticketData={ticketData} />
      ) : (
        <TypeOfTicket>
          <MainDescription>Ingresso e pagamento</MainDescription>
          <MainTitle>Primeiro, escolha sua modalidade de ingresso</MainTitle>
          <Boxes>
            <Check
              setTicketType={setTicketType}
              title={'Presencial'}
              price={250}
              plus={false}
              color={ticketType.isRemote === true ? '#FFEED2' : 'white'}
            ></Check>
            <Check
              setTicketType={setTicketType}
              title={'Online'}
              price={100}
              plus={false}
              color={ticketType.isRemote === false ? '#FFEED2' : 'white'}
            ></Check>
          </Boxes>
        </TypeOfTicket>
      )}
    </Container>
  );
}
const ContainerWithoutEnrollment = styled.div`
  height: 100%;
`;
const TypeOfTicket = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const MainDescription = styled.h1`
  width: 338px;
  height: 40px;
  left: 341px;
  top: 206px;
  margin-bottom: 30px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;

  color: #000000;
`;
const NoEnrollment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  p {
    width: 388px;
    height: 46px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #8e8e8e;
  }
`;
const MainTitle = styled.h1`
  width: 409px;
  height: 23px;
  left: 341px;
  top: 283px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #8e8e8e;
`;
const Boxes = styled.div`
  display: flex;
`;

const PaymentBox = styled.div`
  width: 290px;
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
