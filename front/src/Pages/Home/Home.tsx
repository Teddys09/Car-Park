import React from 'react';
import Sign from '../../Components/Sign/Sign';
import { Container, Info, Title, Text } from './Home.styles';

const Home = () => {
  return (
    <Container>
      <Sign />
      <Info>
        <Title>Park became easy !</Title>
        <Text>
          Check if there is some available space for your car then check-in and
          Voila its that easy !
        </Text>
      </Info>
    </Container>
  );
};

export default Home;
