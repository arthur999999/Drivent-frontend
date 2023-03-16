import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import Check from './checkBox';
import { useState } from 'react';
import { getTicket } from '../../../services/ticketApi';
import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext';
import { useEffect } from 'react';
import PaymentConfirm from './paymentConfirm';
import SelectWithHotel from '../../../components/Dashboard/SelectWithHotel';
import ReserveConfirm from '../../../components/Dashboard/SelectWithHotel/ReservButton';
import PaymentContainer from '../../../components/payment/PaymentContainer';
import ReturnMessage from '../../../components/ReturnMessage';

export default function Payment() {
  const { enrollment } = useEnrollment();
  const [ticketType, setTicketType] = useState({ price: undefined, isRemote: undefined, includesHotel: undefined });
  const [isPaid, setIsPaid] = useState(false);
  const [ticketData, setTicketData] = useState();
  const { userData } = useContext(UserContext);
  const [reloadPage, setReloadPage] = useState([]);

  useEffect(() => {
    getTicket(userData.token).then((data) => {
      data.status === 'PAID' && setIsPaid(true);
      setTicketData(data);
    });
  }, [reloadPage]);

  function hiddenReservedButton() {
    if (ticketType.isRemote === false) {
      return 'show';
    }

    if (ticketType.includesHotel !== undefined) {
      return 'show';
    }

    return 'hidden';
  }

  if (!enrollment)
    return (
      <ReturnMessage
        MainPageName={'Ingresso e pagamento'}
        Message={'Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso'}
      />
    );

  return (
    <Container>
      {ticketData ? (
        isPaid ? (
          <PaymentConfirm ticketData={ticketData} />
        ) : (
          <PaymentContainer setIsPaid={setIsPaid} />
        )
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
          <OtherOptions className={ticketType.isRemote ? 'show' : 'hidden'}>
            <SelectWithHotel setTicketType={setTicketType} ticketType={ticketType} />
          </OtherOptions>
          <ReservButton className={hiddenReservedButton()}>
            <ReserveConfirm ticketType={ticketType} setReloadPage={setReloadPage} reloadPage={reloadPage} />
          </ReservButton>
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

  .hidden {
    display: none;
  }
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

const OtherOptions = styled.div`
  box-sizing: border-box;
`;

const ReservButton = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  padding-bottom: 20px;
`;
