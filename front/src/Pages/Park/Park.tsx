import React from 'react';
import { Container } from './Park.styles';
import { useSelector } from 'react-redux';
import VehicleChoice from '../../Components/VehicleChoice/VehicleChoice';

const Park = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idInUrl = urlSearchParams.get('_id') ?? '';

  // convert id to number
  //const id = parseInt(idInUrl);
  console.log(idInUrl);

  const parks = useSelector((state: any) => state.parks);
  const parkFilter = parks.filter((park: any) => park._id === idInUrl);
  const park = parkFilter[0];

  return (
    <Container>
      <VehicleChoice {...park} />
    </Container>
  );
};

export default Park;
