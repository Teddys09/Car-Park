import React from 'react';
import {
  Container,
  Image,
  Location,
  Name,
  PropertyContainer,
  PropertyImg,
  PropertyTitle,
  Rating,
  Space,
} from './ParkCard.styles';
import ParkImage from '../../assets/images/parking.jpg';
import Camera from '../../assets/logo/camera-solid.svg';
import Guard from '../../assets/logo/person-military-pointing-solid.svg';
import Lightning from '../../assets/logo/bolt-lightning-solid.svg';
import { useSelector } from 'react-redux';

type IParkCard = {
  id: string;
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

const ParkCard = () => {
  const parks = useSelector((state: any) => state.parks);
  console.log(parks);

  return (
    <>
      {parks.map((park: IParkCard) => (
        <Container key={park.id}>
          <Name>{park.name}</Name>
          <Image src={ParkImage} alt="parking" />
          <Location>{park.location}</Location>
          <Space>{park.space}</Space>
          <Rating>{park.rating}</Rating>
          <PropertyContainer>
            <PropertyTitle>Options :</PropertyTitle>
            <PropertyImg src={Camera} alt="camera" />
            <PropertyImg src={Guard} alt="guard" />
            <PropertyImg src={Lightning} alt="lightning" />
          </PropertyContainer>
        </Container>
      ))}
    </>
  );
};

export default ParkCard;
