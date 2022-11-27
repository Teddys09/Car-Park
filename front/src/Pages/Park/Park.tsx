import React from 'react';
import { Container, Section } from './Park.styles';
import { useSelector } from 'react-redux';
import { GetAllParks } from '../../utils/useFetch/Fetch';

const Park = () => {
  const token = useSelector((state: any) => state.token);
  GetAllParks(token);
  return (
    <Section>
      <Container>Test</Container>
    </Section>
  );
};

export default Park;
