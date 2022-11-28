import React from 'react';
import { Container, Section } from './Parks.styles';
import { useSelector } from 'react-redux';

import AddPark from '../../Components/AddPark/AddPark';
import ParkCard from '../../Components/ParkCard/ParkCard';
import { GetAllParks } from '../../utils/useFetch/Fetch';

type IParkCard = {
  _id: string;
  name: string;
  location: string;
  rating: number;
  space: number;
  property: {
    camera: boolean;
    security: boolean;
    charging: boolean;
  };
};

const Park = () => {
  const token = useSelector((state: any) => state.token);
  const parks = useSelector((state: any) => state.parks);

  const role = useSelector((state: any) => state.role);
  if (parks.length === 0) {
    GetAllParks(token);
  }

  return (
    <Section>
      <Container>
        {role === 'admin' ? <AddPark /> : null}
        {!parks.length ? (
          <h1>{parks.message}</h1>
        ) : (
          parks.map((park: IParkCard) => <ParkCard key={park._id} {...park} />)
        )}
      </Container>
    </Section>
  );
};

export default Park;
