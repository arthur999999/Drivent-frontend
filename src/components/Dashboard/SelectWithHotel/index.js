import styled from 'styled-components';

export default function SelectWithHotel({ setTicketType, ticketType }) {
  function setTicketComHotel() {
    setTicketType({
      price: 600,
      isRemote: ticketType.isRemote,
      includesHotel: true
    });
  };

  function setTicketNoHotel() {
    setTicketType({
      price: 250,
      isRemote: ticketType.isRemote,
      includesHotel: false
    });
  }
 
  return(
    <SelectDiv>
      <p className='subtitle'>Ótimo! Agora escolha sua modalidade de hospedagem</p>
      <div>
        <button className={ticketType.includesHotel === false ? 'color' : 'white'} onClick={() => setTicketNoHotel()}><p>Sem Hotel</p><span>+ R$ 0</span></button>
        <button className={ticketType.includesHotel === true ? 'color' : 'white'} onClick={() => setTicketComHotel()}><p>Com Hotel</p><span>+ R$ 350</span></button>
      </div>
    </SelectDiv>
  );
};

const SelectDiv = styled.div`
    font-family: 'Roboto';
    box-sizing: border-box;
    margin-top: 44px;

    div {
        display: flex;
        margin-top: 17px;
    }

    .subtitle{
        color: #8E8E8E;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

    }

    button {
        width: 145px;
        height: 145px;
        border: 1px solid #CECECE;
        margin-right: 24px;
        border-radius: 20px;
        background-color: #FFFFFF;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        cursor: pointer;

        color: #454545;
    }

    .color {
      background-color: #FFEED2;
    }

    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #898989;
    }
`;
