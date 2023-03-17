import styled from 'styled-components';
import { CgEnter } from 'react-icons/cg';

export default function Card() {
  return (
    <Container>
      <div>
        <h1>Minecraft: montando o PC ideal</h1>
        <p>09:00 - 10:00</p>
      </div>
      <Line />
      <IconDiv>
        <Enter />
        <h2>27 vagas</h2>
      </IconDiv>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f1f1f1;
  height: 79px;
  border-radius: 5px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
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
`;

const IconDiv = styled.div`
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
    color: #078632;
    text-align: center;
  }
`;

const Enter = styled(CgEnter)`
  color: #078632;
  font-size: 30px;
  height: 70%;
`;
