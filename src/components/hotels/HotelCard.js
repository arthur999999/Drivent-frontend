import styled from 'styled-components';

export default function HotelCard({ data }) {
  return (
    <Card>

      <Img src={ data.image }/>
      <Name>{ data.name }</Name>

      <Title>Tipos de acomodação:</Title>
      <Infos>{ data.roomTypes }</Infos>

      <div></div>

      <Title>Vagas disponíveis:</Title>
      <Infos>{ data.vacancies }</Infos>
      
    </Card>
  );
}

const Card = styled.div`
height: 264px;
width: 196px;
border-radius: 10px;
background-color: #EBEBEB;

padding: 14px;

div {
    height: 10px;
    width: 100%
}
`;

const Img = styled.img`
height: 109px;
width: 168px;
border-radius: 5px;
`;

const Name = styled.p`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #343434;

display: block;
margin: 10px 0;
`;

const Title = styled.p`
font-family: Roboto;
font-size: 12px;
font-weight: 700;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color:#3C3C3C;
`;

const Infos = styled(Title)`
font-weight: 400;
`;
