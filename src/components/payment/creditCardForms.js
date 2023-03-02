import creditCard from '../../assets/images/creditCard.png';
import styled from 'styled-components';

export default function CreditCardForms() {
  return (
    <form>
      <Container>
        <img src={creditCard} alt='credit card eg'/>
        <Div>
          <aside>
            <Input placeholder='Card Number'/>
            <Eg>Eg.: 49..., 50..., 51..., 52...</Eg>
          </aside>
          <Input placeholder='Name'/>
          <div>
            <MediumInput placeholder='Valid Thru'/>
            <SmallInput placeholder='CVC'/>
          </div>
        </Div>
      </Container>
      <Button>FINALIZAR PAGAMENTO</Button>
    </form>
  );
}

const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  margin-top: 15px;
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

