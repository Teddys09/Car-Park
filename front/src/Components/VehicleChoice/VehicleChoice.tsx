import React, { useState } from 'react';
import {
  Container,
  VehicleContainer,
  VehicleImg,
} from './VehicleChoice.styles';

import Car from '../../assets/logo/car-white.svg';
import Bike from '../../assets/logo/motorcycle-solid.svg';

type IPark = {
  vehicle: string;
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

const VehicleChoice = (park: IPark) => {
  const [isClicked, setIsClicked] = useState<boolean>(true);
  console.log(park);

  return (
    <Container>
      <VehicleContainer>
        <VehicleImg
          src={Car}
          className={`${isClicked ? '' : 'low-opacity'}`}
          alt="Car"
          onClick={() => setIsClicked(true)}
        />
      </VehicleContainer>
      <VehicleContainer>
        <VehicleImg
          src={Bike}
          className={`${!isClicked ? '' : 'low-opacity'}`}
          alt="Motorcycle"
          onClick={() => setIsClicked(false)}
        />
      </VehicleContainer>
    </Container>
  );
};

export default VehicleChoice;
