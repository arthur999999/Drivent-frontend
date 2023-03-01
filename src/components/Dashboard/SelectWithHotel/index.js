import styled from 'styled-components';

export default function SelectWithHotel() {
  return(
    <SelectDiv>
      <p className='subtitle'>Ótimo! Agora escolha sua modalidade de hospedagem</p>
      <div>
        <button><p>Sem Hotel</p><span>+ R$ 0</span></button>
        <button><p>Com Hotel</p><span>+ R$ 350</span></button>
      </div>
    </SelectDiv>
  );
};

const SelectDiv = styled.div`

    box-sizing: border-box;

    div {
        display: flex;
        margin-top: 17px;
    }

    .subtitle{
        color: #8E8E8E;

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

        color: #454545;
    }

    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #898989;
    }
`;
