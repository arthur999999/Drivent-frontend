import { useContext, useEffect, useState } from 'react';
import { getTicket } from '../../../services/ticketApi';
import UserContext from '../../../contexts/UserContext';
import ReturnMessage from '../../../components/ReturnMessage';
import styled from 'styled-components';
import { getEventInfo } from '../../../services/eventApi';
import { getBookingService } from '../../../services/bookingApi';
import ActivitiesBox from '../../../components/Activities/activitiesBox';
import { getActivitiesDates, getActivitiesByDate } from '../../../services/activitiesApi';

export default function Activities() {
  const [userTicket, setUserTicket] = useState(null);
  const [activities, setActivities] = useState(null);
  const [userBooking, setUserBooking] = useState(null);
  const [dates, setDates] = useState();
  const [clickedDay, setClickedDay] = useState();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    getBookingService(userData.token)
      .then((res) => {
        setUserBooking(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getActivitiesDates(userData.token)
      .then((res) => {
        setDates(res);
      })
      .catch((err) => {
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
    getActivities(date)
      .then((res) => {
        setActivities(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  if (!userTicket || userTicket.status === 'RESERVED')
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
  if (!userBooking)
    return <ReturnMessage MainPageName={'Escolha de atividades'} Message={'Escolha seu hotel antes de prosseguir'} />;

  return (
    <MainContainer>
      <MainTitle>Escolha de atividades</MainTitle>
      <FirstMessage>Primeiro, filtre pelo dia do evento: </FirstMessage>
      <ButtonsFilters>
        <FilterButton
          onClick={() => {
            setClickedDay(dates[0].id);
          }}
          color={dates && clickedDay === dates[0].id && true}
        >
          {dates && dates[0].weekday}, {dates && dates[0].day}/{dates && dates[0].mounth}
        </FilterButton>
        <FilterButton
          onClick={() => {
            setClickedDay(dates[1].id);
          }}
          color={dates && clickedDay === dates[1].id && true}
        >
          {dates && dates[1].weekday}, {dates && dates[1].day}/{dates && dates[1].mounth}
        </FilterButton>
        <FilterButton
          onClick={() => {
            setClickedDay(dates[2].id);
          }}
          color={dates && clickedDay === dates[2].id && true}
        >
          {dates && dates[2].weekday}, {dates && dates[2].day}/{dates && dates[2].mounth}
        </FilterButton>
      </ButtonsFilters>
      {clickedDay && <ActivitiesBox clickedDayId={clickedDay}/>}
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
  background: ${(props) => (props.color ? '#FFD37D' : '#e0e0e0')};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 20px;
  cursor: pointer;
`;
const ButtonsFilters = styled.div`
  display: flex;
`;
