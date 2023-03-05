import styled from 'styled-components';
import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import Payment from 'payment';
import api from '../../services/api.js';
import useToken from '../../hooks/useToken.js';
import { toast } from 'react-toastify';

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './validateCardForms';

export default function CreditCardForms({ ticketId, setIsPaid }) {
  const [data, setData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  });
  const token = useToken();

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setData({ ...data, issuer });
    }
  };
  
  const handleInputFocus = ({ target }) => {
    setData({
      ...data,
      focused: target.name
    });
  };
  
  const handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }
  
    setData({ ...data, [target.name]: target.value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();

    const issuer =  Payment.fns.cardType(data.number);

    const body = {
      ticketId,
      cardData: {
        issuer,
        number: data.number,
        name: data.name,
        expirationDate: data.expiry,
        cvv: data.cvc
      }
    };

    const response = api.post('/payments/process', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    response.then(() => {
      toast('Pagamento realizado com sucesso');
      setIsPaid(true);
    });
    response.catch((err) => {
      toast('Houve um erro no processamento do pagamento!');
      console.log(err.response.data);
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Container>
        <Cards
          number={data.number}
          name={data.name}
          expiry={data.expiry}
          cvc={data.cvc}
          focused={data.focused}
          callback={(e) => handleCallback(e)}
        />
        <Div>
          <aside>
            <Input 
              type='tel'
              name='number'
              className='form-control'
              placeholder='Card Number'
              pattern='[\d| ]{16,22}'
              maxLength='19'
              required
              onChange={e => handleInputChange(e)}
              onFocus={e => handleInputFocus(e)}
            />
            <Eg>Eg.: 49..., 50..., 51..., 52...</Eg>
          </aside>
          <Input 
            type='text'
            name='name'
            className='form-control'
            placeholder='Name'
            pattern='[a-z A-Z-]+'
            required
            onChange={(e) => handleInputChange(e)}
            onFocus={(e) => handleInputFocus(e)}
          />
          <div>
            <MediumInput
              type='tel'
              name='expiry'
              className='form-control'
              placeholder='Valid Thru'
              pattern='\d\d/\d\d'
              required
              onChange={e => handleInputChange(e)}
              onFocus={e => handleInputFocus(e)}
            />
            <SmallInput               
              type='tel'
              name='cvc'
              className='form-control'
              placeholder='CVC'
              pattern='\d{3}'
              required
              onChange={e => handleInputChange(e)}
              onFocus={e => handleInputFocus(e)}
            />
          </div>
        </Div>
      </Container>
      <input type='hidden' name='issuer' value={data.issuer} />
      <Button>FINALIZAR PAGAMENTO</Button>
    </form>
  );
}

const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  /* margin-top: 15px; */
  margin-left: 35px;

  display: flex;
  flex-direction: column;
  gap: 13px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Input = styled.input`
  width: 475px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #BDBDBD;

  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  color: #ABABAB;

  padding-left: 10px;
`;

const MediumInput = styled(Input)`
   width: 284px;
`;

const SmallInput = styled(Input)`
    width: 157px;
`;

const Eg= styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  color: #ABABAB;

  display: block;
  padding-left: 7px;
`;

const Button = styled.button`
    height: 37px;
    width: 182px;
    left: 335px;
    top: 713px;
    border-radius: 4px;
    box-shadow: 0px 2px 10px 0px #00000040;
    border: none;
    background-color: #E0E0E0;

    cursor: pointer;
`;

