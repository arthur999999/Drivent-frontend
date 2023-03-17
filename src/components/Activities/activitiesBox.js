import styled from 'styled-components';
import Card from './Card';
import { getActivitiesByDate } from '../../services/activitiesApi';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';

export default function ActivitiesBox({ clickedDayId }) {
  const { userData } = useContext(UserContext);
  const [locations, setLocations] = useState();

  useEffect(() => {
    getActivitiesByDate(userData.token, clickedDayId)
      .then((res) => {
        setLocations(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [clickedDayId]);

  return (
    <Container>
      <TitleAndBox>
        <Title>{locations && locations[0].name}</Title>
        <Box>
          {locations &&
            locations[0].activities.map((act) => {
              return <Card key={act.id} activities={act}></Card>;
            })}
        </Box>
      </TitleAndBox>
      <TitleAndBox>
        <Title>{locations && locations[1].name}</Title>
        <Box>{locations &&
            locations[1].activities.map((act) => {
              return <Card key={act.id} activities={act}></Card>;
            })}</Box>
      </TitleAndBox>
      <TitleAndBox>
        <Title>{locations && locations[2].name}</Title>
        <Box>{locations &&
            locations[2].activities.map((act) => {
              return <Card key={act.id} activities={act}></Card>;
            })}</Box>
      </TitleAndBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
`;

const Box = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid #d7d7d7;
  padding: 9px;
`;

const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #7b7b7b;
  margin-bottom: 13px;
`;

const TitleAndBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  height: 100%;
`;
