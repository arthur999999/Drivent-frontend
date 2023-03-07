import styled from 'styled-components';

export default function HotelCard() {
  return (
    <Card>

      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1xGP480mlqyRYDY-BquOmh8pSJaY_xkCwHgu5oQj&s'/>
      <Name>Driven Resorts</Name>

      <Title>Tipos de acomodação:</Title>
      <Infos>Single e Double</Infos>

      <div></div>

      <Title>Vagas disponíveis:</Title>
      <Infos>103</Infos>
      
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
