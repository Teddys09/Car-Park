import React, { useState } from 'react';
import {
  Container,
  FormParkTitle,
  GlobalContainer,
  VehicleContainer,
  VehicleImg,
} from './VehicleChoice.styles';

import Car from '../../assets/logo/car-white.svg';
import Bike from '../../assets/logo/motorcycle-solid.svg';

import ParkCard from '../ParkCard/ParkCard';

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
    <GlobalContainer>
      <ParkCard {...park} />
      <FormParkTitle>Check in</FormParkTitle>
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
    </GlobalContainer>
  );
};

export default VehicleChoice;
//  Container,
//   VehicleContainer,
//   VehicleImg,
//   InfoContainer,
//   Name,
//   Image,
//   Location,
//   RatingContainer,
//   Space,
//   Description,
//   PropertyContainer,
//   PropertyImg,
//   PropertyTitle,
