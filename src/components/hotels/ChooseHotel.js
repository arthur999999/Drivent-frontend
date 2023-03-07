import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelCard from './HotelCard';

export default function ChooseHotel({ setHotelId }) {
  return (
    <>
      <StyledTypography variant="h4">Escolha hotel e quarto</StyledTypography>
      <StyledSubtitle variant="subtitle1">Primeiro, escolha o seu hotel:</StyledSubtitle>
      <HotelCard/>
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
