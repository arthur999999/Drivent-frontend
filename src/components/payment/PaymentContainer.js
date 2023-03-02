import { useState } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketCard from './ticketCard.js';
import CreditCardForms from './creditCardForms.js';

export default function PaymentContainer() {
  const [ticketId, setTicketId] = useState(null);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledSubtitle variant="subtitle1">Ingresso escolhido</StyledSubtitle>
      <TicketCard setTicketId = { setTicketId }/>
      <StyledSubtitlePayment variant="subtitle1">Pagamento</StyledSubtitlePayment>
      <CreditCardForms/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px!important;
`;

const StyledSubtitle = styled(Typography)`
  margin-bottom: 17px!important;
  color: #8E8E8E;
`;

const StyledSubtitlePayment = styled(StyledSubtitle)`
  margin-bottom: 0px;
`;
