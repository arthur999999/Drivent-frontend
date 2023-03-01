import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export default function TicketCard() {
  return (
    <Div>
      <StyledText variant="subtitle1">Presencial + Hotel</StyledText>
      <StyledPrice variant="subtitle1">Presencial + Hotel</StyledPrice>
    </Div>
  );
};

const Div = styled.div`
    height: 108px;
    width: 290px;
    border-radius: 20px;
    background-color: #FFEED2;
`;

const StyledText = styled(Typography)`
  color: #454545;   
`;

const StyledPrice = styled(Typography)`
  color: #898989;   
`;
