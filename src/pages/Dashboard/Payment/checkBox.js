import styled from 'styled-components';

export default function Check({ setTicketType, title, price, plus, color }) {
  return (
    <Box onClick={() => setTicketType({ price, isRemote: title === 'Presencial' })} color={color}>
      <Type>{title}</Type>
      <Price>
        {plus && '+'} R$ {price}
      </Price>
    </Box>
  );
}
const Box = styled.div`
  width: 145px;
  height: 145px;
  background-color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 20px 0px 0px;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
`;
const Type = styled.p`
  width: 75px;
  height: 19px;
  left: 376px;
  top: 376px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;

  text-align: center;

  color: #454545;
`;
const Price = styled.p`
  height: 16px;
  left: 392px;
  top: 398px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;

  color: #898989;
`;
