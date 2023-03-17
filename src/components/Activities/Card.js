import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';
import { TbCircleX } from 'react-icons/tb';

export default function Card({ activities }) {
  const { endsAt, name, startsAt, subscribed, vacancies } = activities;

  return (
    <Container>
      <NameDiv>
        <h1>{name}</h1>
        <p>
          {startsAt} - {endsAt}
        </p>
      </NameDiv>
      <Line />
      {vacancies <= 0 ? (
        <IconDiv>
          <Closed />
          <VacanciesText color='#CC6666'>Esgotado</VacanciesText>
        </IconDiv>
      ) : (
        <IconDiv>
          <Enter />
          <VacanciesText color='#078632'>{vacancies} vagas</VacanciesText>
        </IconDiv>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: #f1f1f1;
  height: 79px;
  border-radius: 5px;
  padding: 12px;
  display: flex;
  margin-bottom: 10px;
  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #343434;
    margin-bottom: 7px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #343434;
  }
`;

const Line = styled.div`
  border: 1px solid #cfcfcf;
  height: 60px;
  margin-right: 12px;
`;

const NameDiv = styled.div`
  width: 70%;
`;

const IconDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VacanciesText = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: ${(props) => props.color};
  text-align: center;
`;

const Enter = styled(CgEnter)`
  color: #078632;
  font-size: 25px;
  height: 70%;
`;

const Closed = styled(TbCircleX)`
  color: #CC6666;
  font-size: 25px;
  height: 70%;
`;
