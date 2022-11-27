import React from 'react';
import { Container } from './Park.styles';
import { useSelector } from 'react-redux';

const Park = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const idInUrl = urlSearchParams.get('_id') ?? '';

  // convert id to number
  //const id = parseInt(idInUrl);
  console.log(idInUrl);

  const parks = useSelector((state: any) => state.parks);
  const park = parks.filter((park: any) => park._id === idInUrl);
  console.log(park);

  return <Container></Container>;
};

export default Park;
