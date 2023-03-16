import { useContext, useEffect, useState } from 'react';
import { getTicket } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import ReturnMessage from '../../../components/ReturnMessage';
import styled from 'styled-components';
import { getEventInfo } from '../../../services/eventApi';
import { getBookingService } from '../../../services/bookingApi';

export default function Activities() {
  const [userTicket, setUserTicket] = useState(null);
  const [activities, setActivities] = useState(null);
  const [userBooking, setUserBooking] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getBookingService(userData.token).then((res) => {
      setUserBooking(res);
    }).catch((err) => {
      console.log(err);
    });

    getTicket(userData.token)
      .then((res) => {
        setUserTicket(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function getActivities(date) {
    getActivities(date).then((res) => {
      setActivities(res);
    }).catch((err) => {
      console.log(err.message);
    });
  }

  if (!userTicket) return <>Loading</>;

  if (userTicket.status === 'RESERVED')
    return (
      <ReturnMessage
        MainPageName={'Escolha de atividades'}
        Message={'Você precisa ter confirmado pagamento antes de fazer a escolha de atividades'}
      />
    );

  if (userTicket.TicketType.isRemote)
    return (
      <ReturnMessage
        MainPageName={'Escolha de atividades'}
        Message={'Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.'}
      />
    );
  if (!userBooking) return <ReturnMessage MainPageName={'Escolha de atividades'} Message={'Escolha seu hotel antes de prosseguir'} />;
  
  return (
    <MainContainer>
      <MainTitle>Escolha de atividades</MainTitle>
      <FirstMessage>Primeiro, filtre pelo dia do evento: </FirstMessage>
      <ButtonsFilters>
        <FilterButton>Sexta, 22/10</FilterButton>
        <FilterButton>Sábado, 23/10</FilterButton>
        <FilterButton>Domingo, 24/10</FilterButton>
      </ButtonsFilters>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 90%;
`;
const MainTitle = styled.h1`
  width: 329px;
  height: 40px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  margin-bottom: 30px;
`;
const FirstMessage = styled.p`
  width: 296px;
  height: 23px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  color: #8e8e8e;
  margin-bottom: 10px;
`;
const FilterButton = styled.button`
  width: 131px;
  height: 37px;
  border: none;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 20px;
  cursor: pointer;
`;
const ButtonsFilters = styled.div`
  display: flex;
`;
