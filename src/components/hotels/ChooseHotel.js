import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import HotelCard from './HotelCard';
import api from '../../services/api.js';
import useToken from '../../hooks/useToken.js';
import { useEffect, useState } from 'react';

export default function ChooseHotel({ setHotelId }) {
  const token = useToken();
  const [hotels, setHotel] = useState(null);

  useEffect(() => {
    const response = api.get('/hotels', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    response.then(res => {
      setHotel(res.data);
      console.log(hotels);
    });
  }, [token]);

  return (
    <>
      <StyledTypography variant="h4">Escolha hotel e quarto</StyledTypography>
      <StyledSubtitle variant="subtitle1">Primeiro, escolha o seu hotel:</StyledSubtitle>

      {hotels ? hotels.map(data => <HotelCard data={ data } key={ data.id }/> )
        : <></>}
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
