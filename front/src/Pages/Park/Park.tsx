import React from 'react';
import { Container, Section } from './Park.styles';
import { useSelector } from 'react-redux';
import { GetAllParks } from '../../utils/useFetch/Fetch';
import AddPark from '../../Components/AddPark/AddPark';

const Park = () => {
  const token = useSelector((state: any) => state.token);
  GetAllParks(token);
  const role = useSelector((state: any) => state.role);

  return (
    <Section>
      <Container>{role === 'admin' ? <AddPark /> : null}</Container>
    </Section>
  );
};

export default Park;
