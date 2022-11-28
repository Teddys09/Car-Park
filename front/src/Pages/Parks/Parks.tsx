import React from 'react';
import { Container, Section } from './Parks.styles';
import { useSelector } from 'react-redux';

import AddPark from '../../Components/AddPark/AddPark';
import ParkCard from '../../Components/ParkCard/ParkCard';
import { GetAllParks } from '../../utils/useFetch/Fetch';

const Park = () => {
  const token = useSelector((state: any) => state.token);

  GetAllParks(token);

  const role = useSelector((state: any) => state.role);

  return (
    <Section>
      <Container>
        {role === 'admin' ? <AddPark /> : null}
        <ParkCard />
      </Container>
    </Section>
  );
};

export default Park;
