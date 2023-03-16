import styled from 'styled-components';

export default function ReturnMessage({ MainPageName, Message }) {
  return (
    <ContainerWithoutEnrollment>
      <MainDescription>{MainPageName}</MainDescription>
      <MessagePage>
        <p>{Message}</p>
      </MessagePage>
    </ContainerWithoutEnrollment>
  );
}
const ContainerWithoutEnrollment = styled.div`
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
const MessagePage = styled.div`
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
