import dayjs from 'dayjs';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicktTypes from '../../../hooks/api/useTicket';
import useToken from '../../../hooks/useToken';
import { postTicket } from '../../../services/ticketApi';

export default function ReserveConfirm({ ticketType, setReloadPage, reloadPage }) {
  const token = useToken();
  const { enrollment } = useEnrollment();
  const types = useTicktTypes();
  
  function reservTicket() {
    const typesOrdenado = [];
    let price = 100;
    while (typesOrdenado.length < 3) {
      for(let i = 0; i < types.length; i++) {
        if(types[i].price === price) {
          typesOrdenado.push(types[i]);
          if(price === 250) {
            price = 600;
          }
          if(price === 100) {
            price = 250;
          }
        }
      }
    }
    
    let typeId;
    if(ticketType.price === 100) {
      typeId = typesOrdenado[0].id;
    }
    if(ticketType.price === 250) {
      typeId = typesOrdenado[1].id;
    }
    if(ticketType.price === 600) {
      typeId = typesOrdenado[2].id;
    }
    const ticket = {
      ticketTypeId: typeId,
      enrollmentId: enrollment.id,  
      status: 'RESERVED',       
      updatedAt: dayjs()   
    };
    postTicket(token, ticket).then( () => {
      setReloadPage([...reloadPage, 1]);
    });
  }
  return(
    <Global>
      <p>Fechado! O total ficou em <span>R$ {ticketType.price}</span>. Agora é só confirmar:</p>
      <button onClick={() => reservTicket()}>RESERVAR INGRESSO</button>
    </Global>
  );
};

const Global = styled.div`
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #8E8E8E;
        margin-bottom: 17px;
    }

    button {
        width: 162px;
        height: 37px;
        background: #E0E0E0;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        border: none;
        cursor: pointer;
        color: #000000;
    }

    span {
        font-weight: 600;
    }
`;
