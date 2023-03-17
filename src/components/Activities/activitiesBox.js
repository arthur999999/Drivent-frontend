import styled from 'styled-components';
import Card from './Card';

export default function ActivitiesBox() {
  return (
    <Container>
      <TitleAndBox>
        <Title>Auditório Principal</Title>
        <Box><Card></Card></Box>
      </TitleAndBox>
      <TitleAndBox>
        <Title>Auditório Lateral</Title>
        <Box></Box>
      </TitleAndBox>
      <TitleAndBox>
        <Title>Sala de Workshop</Title>
        <Box></Box>
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
