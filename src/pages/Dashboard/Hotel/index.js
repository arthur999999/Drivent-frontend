import { useEffect } from 'react';
import styled from 'styled-components';
import { getBooking } from '../../../hooks/api/useBooking';

export default function Hotel() {
  const booking = getBooking();
  console.log(booking);
  return (
    <Global>
      <h2>Escolha de hotel e quarto</h2>
      <p>Você já escolheu seu quarto:</p>
      <Card>
        <img src='https://i.pinimg.com/564x/78/f9/56/78f95637635a6f5b6950b1e0bd2efdc0.jpg' alt='foto do hotel' />
        <h2>Hotel Driven</h2>
        <div className='desc'>
          <p>Quarto Reservado</p>
          <span>101 (Double)</span>
        </div>
        <div className='desc'>
          <p>Quarto Reservado</p>
          <span>101 (Double)</span>
        </div>
      </Card>
    </Global>
  );
}

const Global = styled.div`

  box-sizing: border-box;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
    margin-top: 36px;
  }
`;

const Card = styled.div`
  margin-top: 14px;
  width: 196px;
  height: 264px;
  background: #FFEED2;
  border-radius: 10px;
  padding-left: 14px;

  img{
    object-fit: cover;
    width: 168px;
    height: 109px;
    margin-top: 16px;
    border-radius: 5px;
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
    margin-bottom: 10px;
  }

  .desc {
    margin-bottom: 14px;
  }

  .desc p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
    margin-top: 0px;
  }

  .desc span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3C3C3C;
  }
`;
