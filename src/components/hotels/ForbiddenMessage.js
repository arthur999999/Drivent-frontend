import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function ForbiddenMessage({ message }) {
  return (
    <>
      <StyledTypography variant="h4">Escolha hotel e quarto</StyledTypography>
      <Div>
        <Text>{ message }</Text>
      </Div>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px!important;
`;

const Div = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
font-family: Roboto;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
color: #8E8E8E;

display: block;
width: 400px;
`;
