import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TicketCard from './TicketCard';

export default function PaymentContainer() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <StyledSubtitle variant="subtitle1">Ingresso escolhido</StyledSubtitle>
      <TicketCard/>
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
